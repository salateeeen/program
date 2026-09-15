#include <pthread.h>
#include <stdio.h>

void* thread1() {
    printf("Thread 1 is running\n");
    printf("Thread 1 is running\n");
    printf("Thread 1 is running\n");
    printf("Thread 1 is running\n");
    printf("Thread 1 is running\n");
}

void* thread2() {
    printf("Thread 2 is running\n");
    printf("Thread 2 is running\n");
    printf("Thread 2 is running\n");
    printf("Thread 2 is running\n");
    printf("Thread 2 is running\n");
}

int main() {
    pthread_t t1, t2;
    void* result;

    pthread_create(&t1, NULL, thread1, NULL);
    pthread_create(&t2, NULL, thread2, NULL);

    pthread_join(t1, &result);  // wait for thread to finish
    pthread_join(t2, &result);  // wait for thread to finish

    printf("Thread returned: %ld\n", (long)result);
    return 0;
}