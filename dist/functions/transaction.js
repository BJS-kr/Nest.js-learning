"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transaction = void 0;
async function transaction(QR, anonymousReturnsQuery) {
    const result = [];
    await QR.connect();
    await QR.startTransaction();
    try {
        for (let i = 0; i < anonymousReturnsQuery.length; i++) {
            result.push(await anonymousReturnsQuery[i]());
        }
        await QR.commitTransaction();
        return result;
    }
    catch (e) {
        await QR.rollbackTransaction();
    }
    finally {
        await QR.release();
    }
}
exports.transaction = transaction;
//# sourceMappingURL=transaction.js.map