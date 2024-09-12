const debounce = <Func extends (...args: any[]) => void>(
  func: Func,
  wait: number
) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<Func>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
export default debounce;
