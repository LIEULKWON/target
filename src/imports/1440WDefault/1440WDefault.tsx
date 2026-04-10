import svgPaths from "./svg-ezr59fhnfa";
import { useState } from "react";
// ExtractionProgress is now handled via NotificationBanner

function LetsmatchLogoSvg() {
  return (
    <div className="h-[24px] relative shrink-0 w-[29px]" data-name="letsmatch-logo.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 24">
        <g clipPath="url(#clip0_1_542)" id="letsmatch-logo.svg">
          <path d={svgPaths.p1f29c180} fill="url(#paint0_linear_1_542)" id="Vector" />
          <path d={svgPaths.p36f7e200} fill="url(#paint1_linear_1_542)" id="Vector_2" />
          <path d={svgPaths.p19a4af00} fill="url(#paint2_linear_1_542)" id="Vector_3" />
          <path d={svgPaths.p37ba3100} fill="url(#paint3_linear_1_542)" id="Vector_4" />
          <path d={svgPaths.p1e8b0800} fill="url(#paint4_linear_1_542)" id="Vector_5" />
          <path d={svgPaths.p3d825a00} fill="url(#paint5_linear_1_542)" id="Vector_6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_542" x1="9.44545" x2="9.44545" y1="0.115203" y2="24">
            <stop stopColor="#A5B4FC" style={{ stopColor: "color(display-p3 0.6471 0.7059 0.9882)", stopOpacity: "1" }} />
            <stop offset="1" stopColor="#6366F1" style={{ stopColor: "color(display-p3 0.3882 0.4000 0.9451)", stopOpacity: "1" }} />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_542" x1="22.9911" x2="22.9911" y1="0.497618" y2="20.2252">
            <stop stopColor="#EC4899" style={{ stopColor: "color(display-p3 0.9255 0.2824 0.6000)", stopOpacity: "1" }} />
            <stop offset="1" stopColor="#F9A8D4" style={{ stopColor: "color(display-p3 0.9765 0.6588 0.8314)", stopOpacity: "1" }} />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_542" x1="11.7189" x2="15.5966" y1="6.09837" y2="24.0038">
            <stop offset="0.188219" stopColor="#F9A8D4" style={{ stopColor: "color(display-p3 0.9765 0.6588 0.8314)", stopOpacity: "1" }} />
            <stop offset="1" stopColor="#818CF8" style={{ stopColor: "color(display-p3 0.5059 0.5490 0.9725)", stopOpacity: "1" }} />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_542" x1="13.1006" x2="13.6251" y1="4.90534" y2="11.4383">
            <stop stopColor="#EC4899" style={{ stopColor: "color(display-p3 0.9255 0.2824 0.6000)", stopOpacity: "1" }} />
            <stop offset="1" stopColor="#F9A8D4" style={{ stopColor: "color(display-p3 0.9765 0.6588 0.8314)", stopOpacity: "1" }} />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_542" x1="21.4003" x2="13.2457" y1="0.570021" y2="5.61988">
            <stop stopColor="#F472B6" style={{ stopColor: "color(display-p3 0.9569 0.4471 0.7137)", stopOpacity: "1" }} />
            <stop offset="1" stopColor="#EC4899" style={{ stopColor: "color(display-p3 0.9255 0.2824 0.6000)", stopOpacity: "1" }} />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_542" x1="16.2163" x2="-0.130077" y1="2.21808" y2="13.8751">
            <stop offset="0.0863457" stopColor="#A5B4FC" style={{ stopColor: "color(display-p3 0.6471 0.7059 0.9882)", stopOpacity: "1" }} />
            <stop offset="1" stopColor="#6366F1" style={{ stopColor: "color(display-p3 0.3882 0.4000 0.9451)", stopOpacity: "1" }} />
          </linearGradient>
          <clipPath id="clip0_1_542">
            <rect fill="white" height="24" style={{ fill: "white", fillOpacity: "1" }} width="29" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LetsmatchLogoSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[29px]" data-name="letsmatch-logo.svg fill">
      <LetsmatchLogoSvg />
    </div>
  );
}

function LinkLetsMatch() {
  return (
    <div className="aspect-[29/24] content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Link → LetsMatch">
      <LetsmatchLogoSvgFill />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-between size-full px-[8px]">
        <div className="content-stretch flex items-center relative">
          <LinkLetsMatch />
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1811de30} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Link">
      <Svg />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p35993080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M1.33333 6.66667H14.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Link">
      <Svg1 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link1 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <Item1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[8px] right-0 top-0" data-name="Container">
      <List />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-0 opacity-0 px-[8px] right-[-50.73px] rounded-[8px] top-[-32px]" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(10,10,10,0.7)] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Group</p>
        <p className="leading-[16px]">Management</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute h-[0.01px] left-[8px] right-[8px] top-[8px]" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_525)" id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #F6339A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9658 0.1981 0.6043)", strokeOpacity: "1" }} />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #F6339A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9658 0.1981 0.6043)", strokeOpacity: "1" }} />
          <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, #F6339A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.9658 0.1981 0.6043)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_525">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(246,51,154,0.1)] overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Link">
      <Svg2 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link2 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Link">
      <Svg3 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Link">
      <Svg4 />
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link4 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1db90b80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Link">
      <Svg5 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link5 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M5.33333 11.3333V9.33333" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="opacity-50 overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Link">
      <Svg6 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link6 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[8px] right-[8px] top-[8px]" data-name="List">
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[192px] left-0 right-0 top-[101px]" data-name="Container">
      <Margin />
      <List1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center left-0 opacity-0 px-[8px] right-[-38.41px] rounded-[8px] top-[-32px]" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(10,10,10,0.7)] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Content</p>
        <p className="leading-[16px]">Generation</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute h-[0.01px] left-[8px] right-[8px] top-[8px]" data-name="Margin">
      <Container6 />
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2c494540} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Link">
      <Svg7 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link7 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-1/2" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Link">
      <Svg8 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link8 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[8px] right-[8px] top-[8px]" data-name="List">
      <Item7 />
      <Item8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[84px] left-0 right-0 top-[310px]" data-name="Container">
      <Margin1 />
      <List2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="Container">
      <div className="absolute bg-[#e5e5e5] h-px left-0 right-0 top-[92px]" data-name="Horizontal Divider" />
      <div className="absolute bg-[#e5e5e5] h-px left-0 right-0 top-[301px]" data-name="Horizontal Divider" />
      <Container2 />
      <Container3 />
      <Container5 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p12257fa0} id="Vector" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8822 0.1139 0.2824)", strokeOpacity: "1" }} />
          <path d={svgPaths.p2c1f680} id="Vector_2" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8822 0.1139 0.2824)", strokeOpacity: "1" }} />
          <path d="M14 8H6" id="Vector_3" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8822 0.1139 0.2824)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(225,29,72,0.1)] h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] relative size-full">
          <Svg9 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[32px] relative shrink-0 w-[31px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 32">
        <g id="Frame">
          <path d={svgPaths.p3c860430} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.58333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d={svgPaths.pca29080} id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.58333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Svg10() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="SVG">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[8px] relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Background({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-[#fafafa] flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center justify-between size-full px-[8px]">
            <div className="content-stretch flex items-center relative">
              <LinkLetsMatch />
            </div>
            {onClose && (
              <button 
                onClick={onClose}
                className="overflow-clip relative rounded-[8px] shrink-0 size-[32px] hover:bg-gray-200 transition-colors flex items-center justify-center"
                aria-label="Close sidebar"
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d="M2 8H14" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M8 2L2 8L8 14" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="bg-[#e5e5e5] h-px shrink-0 w-full" data-name="Horizontal Divider" />
        <Container1 />
        <Container7 />
      </div>
    </div>
  );
}

function VerticalBorder({ onClose }: { onClose?: () => void }) {
  return (
    <div className="absolute content-stretch flex h-[900px] items-start justify-center left-0 pr-px top-0 w-[48px]" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-r border-solid inset-0 pointer-events-none" />
      <Background onClose={onClose} />
    </div>
  );
}

function Container9() {
  return <div className="h-full shrink-0 w-[48px]" data-name="Container" />;
}

function Group1() {
  return (
    <div className="absolute inset-[15.27%_10.26%] opacity-20" data-name="Group">
      <div className="absolute inset-[-21.98%_-12.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2784 1870.27">
          <g filter="url(#filter0_f_1_602)" id="Group">
            <path clipRule="evenodd" d={svgPaths.p3202af80} fill="var(--fill-0, #FB923C)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.9843 0.5725 0.2353)", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.p150e07f0} fill="var(--fill-0, #F9A8D4)" fillRule="evenodd" id="Vector_2" style={{ fill: "color(display-p3 0.9765 0.6588 0.8314)", fillOpacity: "1" }} />
            <path clipRule="evenodd" d={svgPaths.pe43d200} fill="var(--fill-0, #818CF8)" fillRule="evenodd" id="Vector_3" style={{ fill: "color(display-p3 0.5059 0.5490 0.9725)", fillOpacity: "1" }} />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1870.27" id="filter0_f_1_602" width="2784" x="-4.93873e-09" y="-1.41943e-06">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_602" stdDeviation="142.769" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[15.27%_10.26%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function BackgroundSvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1870.277px] left-1/2 overflow-clip top-1/2 w-[2784px]" data-name="background.svg">
      <Group />
    </div>
  );
}

function BackgroundSvgFill() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="background.svg fill">
      <BackgroundSvg />
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M6 2V14" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p128dbc60} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg11 />
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ItemButtonMenu() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Item → Button menu">
      <Svg13 />
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Jade Kwon</p>
      </div>
      <Svg14 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg15 />
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Targets</p>
      </div>
    </div>
  );
}

function OrderedList() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_10px] items-center relative shrink-0" data-name="Ordered List">
      <ItemLink />
      <Container10 />
      <ItemButtonMenu />
      <Container11 />
      <ItemLink1 />
    </div>
  );
}

function NavBreadcrumb() {
  return (
    <div className="relative shrink-0" data-name="Nav - breadcrumb">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <OrderedList />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex gap-[17px] h-[61px] items-center left-0 pb-px pl-[16px] right-0 top-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <Button1 />
      <NavBreadcrumb />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[30px] whitespace-nowrap">
        <p className="leading-[36px]">Targeting</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Configure and monitor your target systems</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[275px]" data-name="Container">
      <Heading1 />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-end pb-[24px] relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] w-full">
        <p className="leading-[24px]">Please set your dating preferences first</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Heading />
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p144af00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p22318700} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Gender</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-name="Container">
      <Svg16 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Male</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-[80px] relative self-stretch" data-name="Container">
      <Container23 />
      <Container25 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p3d58bb40} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M2 12H22" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Race</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-name="Container">
      <Svg17 />
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Asian +1</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-[80px] relative self-stretch" data-name="Container">
      <Container27 />
      <Container29 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M20 7H11" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d="M14 17H5" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p15c97b40} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p18f8f1e0} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] tracking-[0.3px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">Age Range</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-name="Container">
      <Svg18 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">25 - 35</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-[80px] relative self-stretch" data-name="Container">
      <Container31 />
      <Container33 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_16px] h-[74px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container26 />
      <Container30 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[14px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[24px] relative w-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Race / Ethnicity</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">(Multi-select)</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <Container36 />
      <Margin2 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">2 selected</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Label />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Svg19 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex gap-[4px] h-[28px] items-center px-[11px] py-px relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Asian</p>
      </div>
      <Button2 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Svg20 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex gap-[4px] h-[28px] items-center px-[11px] py-px relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Middle Eastern</p>
      </div>
      <Button3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-start flex flex-wrap gap-[0px_4px] items-start relative w-full">
        <BackgroundBorderShadow />
        <BackgroundBorderShadow1 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[20px]" data-name="Frame">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
            <path d={svgPaths.p1b1fa300} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="SVG:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <Svg21 />
      </div>
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="bg-[rgba(245,245,245,0.5)] min-h-[40px] relative rounded-[10px] shrink-0 w-full" data-name="Button menu">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] px-[11px] py-[6px] relative w-full">
          <Container38 />
          <SvgMargin />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <ButtonMenu />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[15px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#0a0a0a] text-[14px]">
        <p className="leading-[14px]">Gender</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-bl-[10px] rounded-tl-[10px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Female</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-br-[10px] rounded-tr-[10px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[10px] rounded-tr-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#09090b] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Any</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b border-r border-solid border-t inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#09090b] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Male</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="ButtonGroup">
      <Button4 />
      <Button6 />
      <Button5 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Label1 />
      <Container41 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[72.61px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">25</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container48 />
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

function Container46() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Container47 />
        <RectangleAlignStretch />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[13px] pr-[49px] py-[9px] relative size-full">
          <Container46 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Background2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f5f5f5] content-stretch flex h-[20px] items-center justify-center min-w-[20px] px-[4px] right-[11.55px] rounded-[6px] top-1/2" data-name="Background">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Min</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Background2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">-</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[72.7px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">35</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container54 />
    </div>
  );
}

function RectangleAlignStretch1() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Container53 />
        <RectangleAlignStretch1 />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[13px] pr-[49px] py-[9px] relative size-full">
          <Container52 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Background3() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f5f5f5] content-stretch flex h-[20px] items-center justify-center min-w-[20px] px-[4px] right-[11.15px] rounded-[6px] top-1/2" data-name="Background">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Max</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Background3 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container42() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4.5px] items-start pt-[5.5px] relative size-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
          <p className="leading-[14px]">Age Range</p>
        </div>
        <Container43 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[24px] h-[60px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container42 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex h-[15px] items-center relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-[1_0_0] flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#0a0a0a] text-[14px]">
        <p className="leading-[14px]">Minimum Posts</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[274.04px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">40</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container60 />
    </div>
  );
}

function RectangleAlignStretch2() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Container59 />
        <RectangleAlignStretch2 />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[13px] pr-[49px] py-[9px] relative size-full">
          <Container58 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Background4() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f5f5f5] content-stretch flex h-[20px] items-center justify-center min-w-[20px] px-[4px] right-[11.71px] rounded-[6px] top-1/2" data-name="Background">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Min</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col h-[37px] items-start relative shrink-0 w-full" data-name="Container">
      <Input2 />
      <Background4 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Container">
      <Label2 />
      <Container57 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[62.85px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">500</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container67 />
    </div>
  );
}

function RectangleAlignStretch3() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Container66 />
        <RectangleAlignStretch3 />
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[13px] pr-[49px] py-[9px] relative size-full">
          <Container65 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Background5() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f5f5f5] content-stretch flex h-[20px] items-center justify-center min-w-[20px] px-[4px] right-[11.55px] rounded-[6px] top-1/2" data-name="Background">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Min</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Input3 />
      <Background5 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container64 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">-</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[53.43px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">5000</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container73 />
    </div>
  );
}

function RectangleAlignStretch4() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center relative">
        <Container72 />
        <RectangleAlignStretch4 />
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pl-[13px] pr-[49px] py-[9px] relative size-full">
          <Container71 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Background6() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f5f5f5] content-stretch flex h-[20px] items-center justify-center min-w-[20px] px-[4px] right-[11.15px] rounded-[6px] top-1/2" data-name="Background">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Max</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Input4 />
      <Background6 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Container">
      <Container70 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4.5px] items-start pt-[5.5px] relative size-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
          <p className="leading-[14px]">Follower Count</p>
        </div>
        <Container62 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex gap-[24px] h-[60px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container61 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[14px]">Min Confidence Score to Pass</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_573)" id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M8 10.6667V8" id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M8 5.33333H8.00667" id="Vector_3" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_573">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label">
      <Container76 />
      <Svg22 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex h-[24px] items-center px-[9px] py-px relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">70%</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <BackgroundBorder />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f5f5f5] flex-[1_0_0] h-[6px] min-h-px min-w-px overflow-clip relative rounded-[16777200px]" data-name="Background">
      <div className="absolute bg-[#171717] inset-[0_30%_0_0]" data-name="Background" />
    </div>
  );
}

function Slider() {
  return (
    <div className="absolute bg-[#f3f3f3] left-[521.91px] rounded-[16777200px] size-[16px] top-[-5px]" data-name="Slider">
      <div aria-hidden="true" className="absolute border border-[#171717] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[16px] top-0" data-name="Slider:shadow" />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex h-[6px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Background7 />
      <Slider />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container77 />
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center opacity-50 px-[24px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Reset</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex h-[40px] items-center justify-center opacity-50 px-[25px] py-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Save Conditions</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-end relative w-full">
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-24px] pt-[17px] px-[24px] right-[-24px] top-[4px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <Container78 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[61px] relative shrink-0 w-full" data-name="Margin">
      <HorizontalBorder1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form">
      <Background1 />
      <Container34 />
      <Container39 />
      <Container55 />
      <Container74 />
      <Margin3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Form />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[24px] relative rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 col-span-2" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Import Targets from Instagram Accounts</p>
      </div>
    </div>
  );
}

function Svg23() {
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

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <Svg23 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container82 />
      <Button9 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container81 />
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Container80 />
      </div>
    </div>
  );
}

function Container84() {
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

function Container85() {
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

function Background9() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Container84 />
        <Container85 />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Margin">
      <Background9 />
    </div>
  );
}

function Container89() {
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
    <div className="bg-[rgba(246,51,154,0.13)] content-stretch flex items-center justify-center p-px relative rounded-[16777200px] shrink-0 size-[18px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(246,51,154,0.33)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <Container89 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Target account</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Container">
      <OverlayBorder />
      <Container90 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">Followers of this account will be extracted</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <Container88 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute bottom-[9px] content-stretch flex flex-col items-start left-[37px] overflow-clip pr-[345.28px] top-[9px]" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">username</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container94 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Svg24() {
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

function Svg25() {
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

function Container93() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Input5 />
      <Svg24 />
      <Svg25 />
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container93 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container92 />
    </div>
  );
}

function Container97() {
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
      <Container97 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Followers to Extract</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <OverlayBorder1 />
      <Container98 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto pr-[325.43px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">50</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container104 />
    </div>
  );
}

function RectangleAlignStretch5() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
      <div className="h-full min-w-[15px] opacity-0 shrink-0 w-[15px]" data-name="Rectangle" />
    </div>
  );
}

function Container102() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[0.01px] h-full items-center relative">
        <Container103 />
        <RectangleAlignStretch5 />
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[13px] py-[9px] relative size-full">
          <Container102 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Input6 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Extract All</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Label">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <Container105 />
      <div className="absolute bg-white left-[-16px] opacity-0 rounded-[2.5px] size-[16px] top-[2px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2.5px]" />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex gap-[10.01px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Container101 />
      <Label4 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container100 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start py-[16px] relative shrink-0 w-full" data-name="Container">
      <Container96 />
      <Container99 />
    </div>
  );
}

function Button10({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#f6339a] h-[40px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full hover:bg-[#e02c8b] transition-colors cursor-pointer" 
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
            <p className="leading-[20px]">Extract Followers</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Container106({ onExtractClick }: { onExtractClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Button10 onClick={onExtractClick} />
    </div>
  );
}

function Margin5({ onExtractClick }: { onExtractClick?: () => void }) {
  return (
    <div className="flex-[1_0_0] min-h-[80px] min-w-px relative w-full" data-name="Margin">
      <div className="flex flex-col justify-end min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end min-h-[inherit] pt-[48px] relative size-full">
          <Container106 onExtractClick={onExtractClick} />
        </div>
      </div>
    </div>
  );
}

function Form1({ onExtractClick }: { onExtractClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="Form">
      <Margin4 />
      <Container86 />
      <Container95 />
      <Margin5 onExtractClick={onExtractClick} />
    </div>
  );
}

function Container109() {
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

function Container110() {
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

function Container108() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative w-full">
          <Container109 />
          <Container110 />
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return <div className="bg-[#f5f5f5] h-[3px] rounded-[16777200px] shrink-0 w-full" data-name="Background" />;
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Background10 />
    </div>
  );
}

function Container83({ onExtractClick, isExtracting, onCancelExtraction }: { onExtractClick?: () => void; isExtracting?: boolean; onCancelExtraction?: () => void }) {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start px-[24px] relative size-full">
        <Form1 onExtractClick={onExtractClick} />
        <Container107 />
      </div>
    </div>
  );
}

function Background8({ onExtractClick, isExtracting, onCancelExtraction }: { onExtractClick?: () => void; isExtracting?: boolean; onCancelExtraction?: () => void }) {
  return (
    <div className="bg-white relative rounded-[14px] self-stretch shrink-0 col-span-1" data-name="Background">
      <div className="content-stretch flex flex-col gap-[24px] items-start py-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Container79 />
        <Container83 onExtractClick={onExtractClick} isExtracting={isExtracting} onCancelExtraction={onCancelExtraction} />
      </div>
    </div>
  );
}

function Container17({ onExtractClick, isExtracting, onCancelExtraction }: { onExtractClick?: () => void; isExtracting?: boolean; onCancelExtraction?: () => void }) {
  return (
    <div className="content-stretch grid grid-cols-3 gap-[16px] h-[605px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Background8 onExtractClick={onExtractClick} isExtracting={isExtracting} onCancelExtraction={onCancelExtraction} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[0] relative shrink-0 whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Geist:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0a0a0a] text-[16px]">
        <p className="leading-[24px]">Your Targets</p>
      </div>
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6c737f] text-[14px]">
        <p className="leading-[20px]">Overview of all your target and their status</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_630)" id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
          <path d={svgPaths.p9b1eb80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_630">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[11px] py-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Svg26 />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Manage Blacklist</p>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8822 0.1139 0.2824)", strokeOpacity: "1" }} />
          <path d={svgPaths.p64eb800} id="Vector_2" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8822 0.1139 0.2824)", strokeOpacity: "1" }} />
          <path d={svgPaths.p56ef700} id="Vector_3" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8822 0.1139 0.2824)", strokeOpacity: "1" }} />
          <path d="M6.66667 7.33333V11.3333" id="Vector_4" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8822 0.1139 0.2824)", strokeOpacity: "1" }} />
          <path d="M9.33333 7.33333V11.3333" id="Vector_5" stroke="var(--stroke-0, #E11D48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.8822 0.1139 0.2824)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[rgba(225,29,72,0.1)] content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <Svg27 />
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e11d48] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Delete All Pending Targets</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] relative w-full">
          <Paragraph />
          <Container112 />
        </div>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="bg-black content-stretch flex h-[24px] items-center justify-center min-w-[24px] pl-[8.13px] pr-[8.14px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[0px]">0</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.01px] items-center justify-center relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Passed</p>
        </div>
        <Background12 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[rgba(243,243,243,0.2)] content-stretch flex flex-col h-[36px] items-start left-[-1px] px-[17px] py-[6px] top-0 w-[144px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container115 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="absolute h-[36px] left-[144px] top-0 w-[143px]" data-name="Button:margin">
      <Button13 />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-black content-stretch flex h-[24px] items-center justify-center min-w-[24px] pl-[8.13px] pr-[8.14px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[0px]">0</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Engaged</p>
        </div>
        <Background13 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[rgba(243,243,243,0.2)] content-stretch flex flex-col h-[36px] items-start left-[-1px] px-[17px] py-[6px] top-0 w-[144px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container116 />
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="absolute h-[36px] left-[287px] top-0 w-[143px]" data-name="Button:margin">
      <Button14 />
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-black content-stretch flex h-[24px] items-center justify-center min-w-[24px] px-[4.44px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[0px]">90</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Failed</p>
        </div>
        <Background14 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[rgba(243,243,243,0.2)] content-stretch flex flex-col h-[36px] items-start left-[-1px] px-[17px] py-[6px] rounded-br-[10px] rounded-tr-[10px] top-0 w-[144px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-br-[10px] rounded-tr-[10px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container117 />
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="absolute h-[36px] left-[430px] top-0 w-[143px]" data-name="Button:margin">
      <Button15 />
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-black content-stretch flex h-[24px] items-center justify-center min-w-[24px] pl-[8.13px] pr-[8.14px] py-[4px] relative rounded-[16777200px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[0px]">0</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">Pending</p>
        </div>
        <Background15 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-[#171717] content-stretch flex flex-col h-[36px] items-start left-0 px-[17px] py-[6px] rounded-bl-[10px] rounded-tl-[10px] top-0 w-[144px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-bl-[10px] rounded-tl-[10px]" />
      <Container118 />
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <ButtonMargin2 />
      <ButtonMargin3 />
      <ButtonMargin4 />
      <Button16 />
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[68.55px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.35px] whitespace-nowrap">
          <p className="leading-[20px]">ID</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[236.94px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.35px] whitespace-nowrap">
          <p className="leading-[20px]">Assigned Agent</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[217.16px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.35px] whitespace-nowrap">
          <p className="leading-[20px]">Profile Handle</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[174.99px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.35px] whitespace-nowrap">
          <p className="leading-[20px]">Created At</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[187.01px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.35px] whitespace-nowrap">
          <p className="leading-[20px]">Actioned At</p>
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="relative shrink-0 w-[154.07px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.35px] whitespace-nowrap">
          <p className="leading-[20px]">Message</p>
        </div>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="relative shrink-0 w-[123.91px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.35px] whitespace-nowrap">
          <p className="leading-[20px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="relative shrink-0 w-[149.37px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] tracking-[0.35px] whitespace-nowrap">
          <p className="leading-[20px]">Platform</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="absolute content-stretch flex items-start justify-center left-0 pb-px right-0 top-0" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[rgba(243,243,243,0.5)] h-[36.5px] relative shrink-0 w-full" data-name="Header">
      <Row />
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M13.5 8.5L8.5 13.5" id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M8.5 8.5L13.5 13.5" id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d={svgPaths.p19568f00} id="Vector_3" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M21 21L16.7 16.7" id="Vector_4" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Background16() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center relative rounded-[16777200px] shrink-0 size-[48px]" data-name="Background">
      <Svg28 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">No targets in this category</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="max-w-[320px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center max-w-[inherit] pl-[62.79px] relative w-full">
          <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[16px]">Try switching to a different category or add new targets to get started.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[320px]" data-name="Container">
      <Container120 />
      <Container121 />
    </div>
  );
}

function Svg29() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p317fdd80} id="Vector" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d={svgPaths.p31c78b80} id="Vector_2" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M11.0833 4.66667V8.16667" id="Vector_3" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
          <path d="M12.8333 6.41667H9.33333" id="Vector_4" stroke="var(--stroke-0, #6C737F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" style={{ stroke: "color(display-p3 0.4234 0.4516 0.4971)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">Import targets above</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Svg29 />
      <Container123 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container122 />
    </div>
  );
}

function BodyRowData() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[1264px]" data-name="Body → Row → Data">
      <Background16 />
      <Container119 />
      <Margin6 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-[64.5px] items-center overflow-auto pb-[64px] relative shrink-0 w-full" data-name="Table">
      <Header />
      <BodyRowData />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Rows per page</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
        <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">25</p>
        </div>
      </div>
    </div>
  );
}

function Svg30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0354 0.0354 0.0443)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Combobox() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex h-[36px] items-center justify-between px-[13px] py-[9px] relative rounded-[8px] shrink-0 w-[70px]" data-name="Combobox">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Container127 />
      <Svg30 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Container126 />
      <Combobox />
    </div>
  );
}

function Svg31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container128() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Previous</p>
        </div>
      </div>
    </div>
  );
}

function LinkGoToPreviousPage() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center opacity-50 px-[13px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link - Go to previous page">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Svg31 />
      <Container128 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <LinkGoToPreviousPage />
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6c737f] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">0 of 0</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Next</p>
        </div>
      </div>
    </div>
  );
}

function Svg32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 0.0394 0.0394 0.0394)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function LinkGoToNextPage() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center opacity-50 px-[13px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link - Go to next page">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container130 />
      <Svg32 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <LinkGoToNextPage />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative self-stretch shrink-0" data-name="List">
      <Item9 />
      <Container129 />
      <Item10 />
    </div>
  );
}

function NavigationPagination() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-center relative shrink-0" data-name="Navigation - pagination">
      <List3 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container125 />
      <NavigationPagination />
    </div>
  );
}

function Container113() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[24px] relative w-full">
        <Container114 />
        <Table />
        <Container124 />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[24px] pt-[40px] relative rounded-[14px] shrink-0 w-full shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Background">
      <Container111 />
      <Container113 />
    </div>
  );
}

function Frame2({ onExtractClick, isExtracting, onCancelExtraction }: { onExtractClick?: () => void; isExtracting?: boolean; onCancelExtraction?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container17 onExtractClick={onExtractClick} isExtracting={isExtracting} onCancelExtraction={onCancelExtraction} />
      <Background11 />
    </div>
  );
}

function Container12({ onExtractClick, isExtracting, onCancelExtraction }: { onExtractClick?: () => void; isExtracting?: boolean; onCancelExtraction?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[1325px] items-start left-0 p-[16px] right-0 top-[61px]" data-name="Container">
      <Container13 />
      <Frame2 onExtractClick={onExtractClick} isExtracting={isExtracting} onCancelExtraction={onCancelExtraction} />
    </div>
  );
}

function Main({ onExtractClick, isExtracting, onCancelExtraction }: { onExtractClick?: () => void; isExtracting?: boolean; onCancelExtraction?: () => void }) {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Main">
      <BackgroundSvgFill />
      <HorizontalBorder />
      <Container12 onExtractClick={onExtractClick} isExtracting={isExtracting} onCancelExtraction={onCancelExtraction} />
    </div>
  );
}

function Container8({ onExtractClick, isExtracting, onCancelExtraction }: { onExtractClick?: () => void; isExtracting?: boolean; onCancelExtraction?: () => void }) {
  return (
    <div className="content-stretch flex h-[1386px] items-start min-h-[900px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Main onExtractClick={onExtractClick} isExtracting={isExtracting} onCancelExtraction={onCancelExtraction} />
    </div>
  );
}

export default function Component1440WDefault({ onExtractionStateChange }: { onExtractionStateChange?: (isExtracting: boolean) => void } = {}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isExtracting, setIsExtracting] = useState(false);

  const handleExtractClick = () => {
    setIsExtracting(true);
    onExtractionStateChange?.(true);
  };

  const handleCancelExtraction = () => {
    setIsExtracting(false);
  };

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="1440w default" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 243, 243) 0%, rgb(243, 243, 243) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      {isSidebarOpen ? (
        <VerticalBorder onClose={() => setIsSidebarOpen(false)} />
      ) : (
        <div className="absolute h-[900px] left-0 top-0 w-[48px]">
          <div className="bg-[#fafafa] flex flex-col items-center justify-between size-full border-r border-[#e5e5e5]">
            {/* Open button at the top */}
            <div className="p-[8px] w-full">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="overflow-clip relative rounded-[8px] shrink-0 size-[32px] hover:bg-gray-200 transition-colors w-full flex items-center justify-center"
                aria-label="Open sidebar"
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d="M1.33333 6.66667H14.6667" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </button>
            </div>
            {/* Log out button at the bottom */}
            <div className="p-[8px] w-full">
              <div className="bg-[rgba(225,29,72,0.1)] h-[32px] rounded-[8px] w-full flex items-center justify-center">
                <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p12257fa0} stroke="#E11D48" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p2c1f680} stroke="#E11D48" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d="M14 8H6" stroke="#E11D48" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      <Container8 onExtractClick={handleExtractClick} isExtracting={isExtracting} onCancelExtraction={handleCancelExtraction} />
    </div>
  );
}