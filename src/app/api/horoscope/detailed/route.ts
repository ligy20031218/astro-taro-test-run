import { NextResponse } from "next/server";
import { generateDetailedHoroscope } from "@/lib/astrology";
import { translateList, translateText } from "@/lib/i18n";

export async function POST(request: Request) {
  try {
    const { sign, scope, startDate, lang = 'en' } = await request.json();
    
    if (!sign || !scope || !startDate) {
      return NextResponse.json(
        { error: "Missing required fields: sign, scope, startDate" },
        { status: 400 }
      );
    }

    if (!['daily', 'weekly', 'monthly', 'yearly'].includes(scope)) {
      return NextResponse.json(
        { error: "Scope must be 'daily', 'weekly', 'monthly', or 'yearly'" },
        { status: 400 }
      );
    }

    const horoscope = generateDetailedHoroscope(sign, scope, startDate, lang);

    // Summary and suggestions are already generated in the target language
    // Just translate tips and sections
    const localized = {
      ...horoscope,
      tipsDo: translateList(horoscope.tipsDo, lang),
      tipsDont: translateList(horoscope.tipsDont, lang),
      sections: (horoscope.sections || []).map((s: { id: string; title: string; content: string }) => ({
        ...s,
        title: translateText(s.title, lang),
        content: translateText(s.content, lang)
      })),
    };
    
    return NextResponse.json({
      success: true,
      horoscope: localized
    });
  } catch (error) {
    console.error("Error generating detailed horoscope:", error);
    return NextResponse.json(
      { error: "Failed to generate detailed horoscope" },
      { status: 500 }
    );
  }
}
