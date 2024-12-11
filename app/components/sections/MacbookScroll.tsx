interface MacbookScrollProps {
  title: string;
  badge: string;
  src: string;
  showGradient?: boolean;
}

export default function MacbookScroll({ title, badge, src, showGradient = true }: MacbookScrollProps) {
    return (
      <div className="relative mx-auto max-w-xl rounded-lg overflow-hidden">
          <div className="flex justify-between items-center">
          </div>
            <img
              src={src}
              alt="Digital Campus Interface"
              className="w-full h-auto object-cover"
            />
        </div>

    );
  }