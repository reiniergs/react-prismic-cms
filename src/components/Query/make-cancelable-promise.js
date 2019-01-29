export default function makeCancelablePromise(promise) {
    let hasCanceled = false;
    const rejectResponse = {
        isCanceled: true,
    };

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => (hasCanceled ? reject(rejectResponse) : resolve(val)),
            error => (hasCanceled ? reject(rejectResponse) : reject(error)),
        );
    });

    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled = true;
        },
    };
}
