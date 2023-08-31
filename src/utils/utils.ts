export const dateToKr = (createdDate: string) => {
  return new Date(createdDate).toLocaleString('ko-KR');
};
