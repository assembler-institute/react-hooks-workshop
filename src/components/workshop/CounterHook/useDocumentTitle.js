import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `You clicked ${count} times 🎉`;
  }, [count]);
}

export default useDocumentTitle;
