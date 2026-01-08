
// 예제 검증코드
export const validateCarNames = (input) => {
  if (!input || typeof input !== 'string' || input.trim() === '') {
    throw new Error('[ERROR] 자동차 이름이 입력되지 않았습니다.');
  }

  const carNames = input.split(',').map(name => name.trim());

  if (carNames.length === 0) {
    throw new Error('[ERROR] 자동차 이름이 입력되지 않았습니다.');
  }

  for (const name of carNames) {
    if (name === '') {
      throw new Error('[ERROR] 자동차 이름은 비어있을 수 없습니다.');
    }

    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5글자 이하여야 합니다.');
    }
  }

  // 중복 검사
  const uniqueNames = new Set(carNames);
  if (uniqueNames.size !== carNames.length) {
    throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
  }

  return carNames;
};