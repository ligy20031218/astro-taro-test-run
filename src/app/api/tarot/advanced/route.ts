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
    
    const session = drawTarotCards(spreadName, seed, question);
    const suggestions = getFollowUpSuggestions(session);

    // Localize session reading and positions (keep card names as-is for now)
    const localizedSession = {
      ...session,
      spread: {
        ...session.spread,
        name: translateText(session.spread.name, lang),
        positions: session.spread.positions.map((p: string) => translateText(p, lang))
      },
      question: translateText(session.question, lang),
      readingText: translateText(session.readingText, lang)
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
