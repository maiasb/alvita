import { ClockIcon, PinIcon } from "./icons";

export function TopBar() {
  return (
    <div className="bg-ink text-[0.8rem] text-white/90">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
        <p className="flex items-center gap-2">
          <ClockIcon className="size-4 shrink-0 text-lime" />
          <span>
            Seg a sex 6h30 às 18h30<span className="hidden sm:inline"> · Sáb 6h30 às 12h</span>
          </span>
        </p>
        <p className="flex items-center gap-2">
          <PinIcon className="size-4 shrink-0 text-lime" />
          Castanhal, PA
        </p>
      </div>
    </div>
  );
}
