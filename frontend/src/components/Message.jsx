import { CheckCircleIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Message = ({ variant = 'info', children, onClose }) => {
  const variants = {
    success: {
      icon: CheckCircleIcon,
      classes: 'bg-green-50 border-green-200 text-green-800',
      iconClasses: 'text-green-400',
    },
    error: {
      icon: ExclamationTriangleIcon,
      classes: 'bg-red-50 border-red-200 text-red-800',
      iconClasses: 'text-red-400',
    },
    info: {
      icon: CheckCircleIcon,
      classes: 'bg-blue-50 border-blue-200 text-blue-800',
      iconClasses: 'text-blue-400',
    },
  };

  const { icon: Icon, classes, iconClasses } = variants[variant];

  return (
    <div className={`border rounded-lg p-4 ${classes}`}>
      <div className="flex items-start">
        <Icon className={`h-5 w-5 ${iconClasses} mt-0.5 mr-3 flex-shrink-0`} />
        <div className="flex-1">
          <p className="text-sm font-medium">{children}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-3 flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <XMarkIcon className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Message;
