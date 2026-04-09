import svgPaths from "./svg-ezoy8485tm";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Blend">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-6%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
              <g id="Vector">
                <path d={svgPaths.p159bdd00} stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0353 0.0353 0.0431)", strokeOpacity: "1" }} />
                <path d={svgPaths.pab40190} stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0353 0.0353 0.0431)", strokeOpacity: "1" }} />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#71717a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">GENDER</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative rounded-[10px]" data-name="Background+Border+Shadow">
      <Frame />
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#09090b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Female</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Globe">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-6%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 18.6667">
              <path d={svgPaths.p1d932b80} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0353 0.0353 0.0431)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#71717a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">RACE</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative rounded-[10px]" data-name="Background+Border+Shadow">
      <Frame1 />
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#09090b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Any</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icon / Settings2">
        <div className="absolute inset-[16.67%]" data-name="Vector">
          <div className="absolute inset-[-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3333 15.3333">
              <path d={svgPaths.p13512f00} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0353 0.0353 0.0431)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#71717a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">AGE RANGE</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative rounded-[10px]" data-name="Background+Border+Shadow">
      <Frame2 />
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#09090b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">20 - 40</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[12px_8px] items-start relative w-full">
        <BackgroundBorderShadow />
        <BackgroundBorderShadow1 />
        <BackgroundBorderShadow2 />
      </div>
    </div>
  );
}

export default function Persona() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex flex-col items-start p-[12px] relative rounded-[14px] size-full" data-name="Persona">
      <Container />
    </div>
  );
}