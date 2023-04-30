export default function Filters({ appliedFilter, setAppliedFilter}) {
  return (
    <div className="">
      {appliedFilter.map((obj) => {
        return (
          <div className="bg-white">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              id={obj.value}
              checked={obj.checked}
              onClick={(e)=>{
              let newState = appliedFilter.map(element=> element.value===e.target.id ? {...element,checked:!element.checked}:element)
              setAppliedFilter(newState);
            }}
            />
            <label className="ml-3 text-sm text-gray-600" for={obj.value}>
              {obj.value}
            </label>
          </div>
        );
      })}
    </div>
  );
}
