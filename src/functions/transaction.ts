import { QueryRunner } from 'typeorm';

export async function transaction(
  QR: QueryRunner,
  anonymousReturnsQueryRunnerMethod: any[],
) {
  const result = [];
  await QR.connect();
  await QR.startTransaction();
  try {
    for (let i = 0; i < anonymousReturnsQueryRunnerMethod.length; i++) {
      result.push(await anonymousReturnsQueryRunnerMethod[i]());
    }
    await QR.commitTransaction();
    return result;
  } catch (e) {
    await QR.rollbackTransaction();
  } finally {
    await QR.release();
  }
}
