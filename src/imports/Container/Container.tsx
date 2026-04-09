function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#09090b] text-[14px] w-full">
        <p className="leading-[20px]">Gender</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Container">
      <Label />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="ButtonGroup">
        <div className="bg-[#18181b] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-bl-[10px] rounded-tl-[10px]" data-name="Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[8px] relative size-full">
              <div className="flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#fafafa] text-[14px] whitespace-nowrap">
                <p className="leading-[20px]">Female</p>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}