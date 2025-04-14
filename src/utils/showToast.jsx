import {
  CheckCircle,
  Info,
  Warning,
  WarningCircle,
} from "@phosphor-icons/react";
import { toast } from "sonner";

export const showToast = (type, message) => {
  const icons = {
    success: (
      <CheckCircle
        className="fill-success stroke-success-content h-6 min-h-6 w-6 min-w-6"
        weight="fill"
      />
    ),
    warning: (
      <Warning
        className="fill-warning stroke-warning-content h-6 min-h-6 w-6 min-w-6"
        weight="fill"
      />
    ),
    error: (
      <WarningCircle
        className="text-destructive fill-error stroke-error-content h-6 min-h-6 w-6 min-w-6"
        weight="fill"
      />
    ),
    info: (
      <Info
        className="text-primary fill-info stroke-info-content h-6 min-h-6 w-6 min-w-6"
        weight="fill"
      />
    ),
  };

  const textColors = {
    success: "text-success",
    warning: "text-warning",
    error: "text-error",
    info: "text-info",
  };

  toast.custom(() => (
    <div
      className={`bg-base-200 shadow-lg flex w-auto items-center gap-4 rounded-xl border border-none p-4 sm:min-w-80`}
    >
      {icons[type] || icons.info}
      <div>
        <p
          className={`font-primary text-sm font-semibold ${textColors[type] || textColors.info}`}
        >
          {message}
        </p>
      </div>
    </div>
  ));
};
