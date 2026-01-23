import { NextResponse } from "next/server";
import { drawTarotCards, generateSeed, getFollowUpSuggestions } from "@/lib/advanced-tarot";
import { translateList, translateText } from "@/lib/i18n";

export async function POST(request: Request) {
  try {
    const { spreadName, userId, question, lang = 'en' } = await request.json();
    
    if (!spreadName || !userId) {
      return NextResponse.json(
        { error: "Missing required fields: spreadName, userId" },
        { status: 400 }
      );
    }

    const date = new Date().toISOString().split('T')[0];
    const seed = generateSeed(userId, date, question || "");
    
    const session = drawTarotCards(spreadName, seed, question, lang);
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
    return NextResponse.json(
      { error: "Failed to draw tarot cards" },
      { status: 500 }
    );
  }
}
