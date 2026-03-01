// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.setData('text/plain', nodeType);
    event.dataTransfer.effectAllowed = 'move';
    if (event.currentTarget) {
      event.currentTarget.style.cursor = 'grabbing';
    }
  };

  const onDragEnd = (event) => {
    if (event.currentTarget) {
      event.currentTarget.style.cursor = 'grab';
    }
  };

  return (
    <div
      className="
        cursor-grab active:cursor-grabbing
        min-w-[80px] h-12 px-4
        flex items-center justify-center
        rounded-lg
        bg-primary-600 hover:bg-primary-700
        text-white text-sm font-medium
        shadow-node hover:shadow-node-hover
        transition-all duration-200
      "
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      onDragEnd={onDragEnd}
    >
      {label}
    </div>
  );
};
