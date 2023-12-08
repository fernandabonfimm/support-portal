import React from "react";
import { IButtonProps } from "../../interfaces/button/IButtonProps";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Button: React.FC<IButtonProps> = ({ onClick, loading = false, label, solid, disabled, warning, outline, className, icon }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full rounded-lg border ${solid ? 'border-tiffany bg-tiffany text-white' :
                outline ? 'bg-none border-tiffany text-tiffany' : warning ? 'bg-cinabre border-cinabre text-white' : null}
                 px-6 py-4 flex items-center justify-center ${className}`}
            disabled={loading || disabled}
        >
            {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin text-white" />
            ) : icon && label}
        </button>
    );
};

export default Button;
