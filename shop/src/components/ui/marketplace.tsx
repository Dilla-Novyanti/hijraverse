import cn from "classnames";
import React, { forwardRef, MarketplaceHTMLAttributes } from "react";

export interface MarketplaceProps extends MarketplaceHTMLAttributes<HTMLButtonElement> {
  className?: string;
  marketplace?:
    | "shopee"
    | "lazada"
    | "tokopedia"
  active?: boolean;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
}

const Marketplace = forwardRef<HTMLButtonElement, MarketplaceProps>((props, ref) => {
  const {
    className,
    marketplace = "shopee",
    children,
    active,
    loading = false,
    disabled = false,
    ...rest
  } = props;

  const rootClassName = cn(
    "text-[13px] md:text-sm leading-4 mx-auto inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center rounded-md placeholder-white",
    {
      "btn-shopee text-black border-black hover:text-black shadow-cart":
        marketplace === "shopee",
      "btn-lazada text-black border-black hover:text-black shadow-cart":
        marketplace === "lazada",
      "btn-tokopedia text-black border-black hover:text-black shadow-cart":
        marketplace === "tokopedia",
      "cursor-not-allowed": loading,
      "bg-opacity-50 hover:bg-opacity-50 cursor-not-allowed hover:cursor-not-allowed":
        disabled,
    },
    className
  );

  return (
    <button
      aria-pressed={active}
      data-marketplace={marketplace}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
      {loading && (
        <svg
          className="animate-spin ltr:-mr-1 rtl:-ml-1 ltr:ml-3 rtl:mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="white"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="white"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
    </button>
  );
});
export default Marketplace;
