import svgPaths from "./svg-o7gz999ept";

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[73.32px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Import Targets from Instagram</p>
        <p className="leading-[24px]">Accounts</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p12949080} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M2 2V5.33333H5.33333" id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M8 4.66667V8L10.6667 9.33333" id="Vector_3" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <Svg />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container3 />
      <Button />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] w-full">
        <p className="mb-0">
          <span className="leading-[20px]">Step 1:</span>
          <span className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] text-[#6c737f]">{` Enter IG pages that your ideal dates`}</span>
        </p>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] mb-0 text-[#6c737f]">would follow (i.e. a local business, a mutual</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] mb-0 text-[#6c737f]">friend, an influencer in your area who shares</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] text-[#6c737f]">your interests, etc.)</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] w-full">
        <p className="mb-0">
          <span className="leading-[20px]">Step 2:</span>
          <span className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] text-[#6c737f]">{` Extract the followers of those pages for`}</span>
        </p>
        <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] text-[#6c737f]">analysis based on your dating preferences!</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f6339a] text-[12px] whitespace-nowrap">
          <p className="leading-[12px]">1</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(246,51,154,0.13)] content-stretch flex h-[18px] items-center justify-center p-px relative rounded-[16777200px] shrink-0 w-[17.05px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(246,51,154,0.33)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[39.19px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px] mb-0">Target</p>
        <p className="leading-[20px]">account</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Container">
      <OverlayBorder />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[43.38px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px] mb-0">Followers of this account will be</p>
        <p className="leading-[16px]">extracted</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container12 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bottom-[7.75px] content-stretch flex flex-col items-start left-[37px] overflow-clip pr-[192.85px] top-[7.75px]" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">username</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_595)" id="SVG">
          <path d={svgPaths.p3adb3b00} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d={svgPaths.p266af080} id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_595">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute bottom-[27.78%] overflow-clip right-[12px] top-[27.78%] w-[16px]" data-name="SVG">
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p1b38bb40} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
        <div className="absolute inset-[-23.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.2 4.2">
            <path d={svgPaths.p3195c6c0} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Svg1 />
      <Svg2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container13 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f6339a] text-[12px] whitespace-nowrap">
          <p className="leading-[12px]">2</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="bg-[rgba(246,51,154,0.13)] content-stretch flex items-center justify-center p-px relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(246,51,154,0.33)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Followers to Extract</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder1 />
      <Container19 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[179.5px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">50</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container25 />
    </div>
  );
}

function RectangleAlignStretch() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Container24 />
        <RectangleAlignStretch />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[13px] py-[7.75px] relative size-full">
          <Container23 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Input1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Extract All</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <Container26 />
      <div className="absolute bg-white left-[-16px] opacity-0 rounded-[2.5px] size-[16px] top-[2px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[10px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Label />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container20 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f6339a] h-[40px] opacity-50 relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Monthly Quota Reached</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="Form">
      <Margin />
      <Container7 />
      <Container16 />
      <Container27 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[12px] whitespace-nowrap">
        <p>
          <span className="leading-[16px]">{`Monthly Quota `}</span>
          <span className="leading-[16px] text-[#6c737f]">(4k per agent)</span>
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f0b100] text-[12px] whitespace-nowrap">
        <p>
          <span className="leading-[16px]">0</span>
          <span className="leading-[16px] text-[#6c737f]">{` / `}</span>
          <span className="leading-[16px] text-[#0a0a0a]">0</span>
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Background2() {
  return <div className="bg-[#f5f5f5] h-[3px] rounded-[16777200px] shrink-0 w-full" data-name="Background" />;
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Background2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <Form />
        <Container28 />
      </div>
    </div>
  );
}

export default function Background() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start py-[24px] relative rounded-[14px] size-full" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Container />
      <Container4 />
    </div>
  );
}