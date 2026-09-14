#include <pthread.h>
#include <stdio.h>

void* myThread(void* arg) {
    printf("Thread is running\n");
    return (void*)42;
}

int main() {
    pthread_t t;
    void* result;

    pthread_create(&t, NULL, myThread, NULL);

    pthread_join(t, &result);  // wait for thread to finish

    printf("Thread returned: %ld\n", (long)result);
    return 0;
}