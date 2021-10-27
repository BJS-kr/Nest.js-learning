import { QueryRunner } from 'typeorm';

export async function transaction(
  QR: QueryRunner,
  anonymousReturnsQuery: any[],
): Promise<any[]> {
  const result = [];
  await QR.connect();
  await QR.startTransaction();
  try {
    for (let i = 0; i < anonymousReturnsQuery.length; i++) {
      result.push(await anonymousReturnsQuery[i]());
    }
    await QR.commitTransaction();
    return result;
  } catch (e) {
    await QR.rollbackTransaction();
  } finally {
    await QR.release();
  }
}
