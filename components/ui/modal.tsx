type InfoModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  icon?: React.ReactNode;
};

export default function InfoModal({
  open,
  onClose,
  title,
  description,
  icon,
}: InfoModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl p-6 max-w-sm w-full text-center animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        {icon && <div className="text-3xl mb-3">{icon}</div>}

        <h3 className="text-lg font-semibold mb-2 text-pink-600 font-poppins">
          {title}
        </h3>

        {description && (
          <p className="text-gray-600 text-md font-poppins">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
