import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CVPreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVPreview = ({ isOpen, onClose }: CVPreviewProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity'
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          'relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300',
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        )}
      >
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b'>
          <h2 className='text-xl font-semibold'>CV Preview</h2>
          <div className='flex items-center gap-2'>
            <a
              href='/Abdelkader-bouzomita_CV.pdf'
              download
              className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-all'
            >
              <Download size={16} />
              Download
            </a>
            <button
              onClick={onClose}
              className='p-2 hover:bg-gray-100 rounded-md transition-colors'
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className='h-[calc(80vh-4rem)]'>
          {isLoading && (
            <div className='absolute inset-0 flex items-center justify-center bg-gray-50'>
              <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary'></div>
            </div>
          )}
          <iframe
            src='/Abdelkader-bouzomita_CV.pdf#toolbar=0'
            className='w-full h-full'
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
