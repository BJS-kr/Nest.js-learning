import { QueryRunner } from 'typeorm';

export async function transaction(
  QR: QueryRunner,
  anonymousReturnsQueryRunnerMethod: any[],
) {
  const results = [];
  await QR.connect();
  await QR.startTransaction();
  try {
    for (let i = 0; i < anonymousReturnsQueryRunnerMethod.length; i++) {
      results.push(await anonymousReturnsQueryRunnerMethod[i]());
    }
    await QR.commitTransaction();
    return results;
  } catch (e) {
    await QR.rollbackTransaction();
  } finally {
    await QR.release();
  }
}
