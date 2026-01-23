import { NextResponse } from "next/server";
import { drawTarotCards, generateSeed, getFollowUpSuggestions } from "@/lib/advanced-tarot";
import { translateList, translateText } from "@/lib/i18n";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { spreadName, userId, question, lang = 'en' } = body;
    
    console.log("Advanced tarot request:", { spreadName, userId: userId?.substring(0, 10) + '...', question: question?.substring(0, 20), lang });
    
    if (!spreadName || !userId) {
      return NextResponse.json(
        { error: "Missing required fields: spreadName, userId", received: { spreadName: !!spreadName, userId: !!userId } },
        { status: 400 }
      );
    }

    const date = new Date().toISOString().split('T')[0];
    const seed = generateSeed(userId, date, question || "");
    
    console.log("Drawing tarot cards with:", { spreadName, seed: seed.substring(0, 20) + '...', lang });
    const session = drawTarotCards(spreadName, seed, question || "", lang);
    console.log("Tarot cards drawn successfully");
    const suggestions = getFollowUpSuggestions(session);

    // Reading text is already translated in drawTarotCards, just translate positions
    const localizedSession = {
      ...session,
      spread: {
        ...session.spread,
        positions: session.spread.positions.map((p: string) => translateText(p, lang))
      }
    };
    
    return NextResponse.json({
      success: true,
      session: localizedSession,
      suggestions: translateList(suggestions, lang)
    });
  } catch (error) {
    console.error("Error drawing tarot cards:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to draw tarot cards", details: errorMessage },
      { status: 500 }
    );
  }
}
