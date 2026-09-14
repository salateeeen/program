#include <stdio.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    pid_t pid;

    pid = fork(); // إنشاء process جديد

    if (pid < 0) {
        // فشل في الإنشاء
        printf("Fork failed\n");
    } 
    else if (pid == 0) {
        // 👶 Child Process
        printf("Child: My PID = %d\n", getpid());
        printf("Child: My Parent PID = %d\n", getppid());

        sleep(2); // نخلي الطفل يتأخر شوي
        printf("Child finished\n");
    } 
    else {
        // 👨 Parent Process
        printf("Parent: My PID = %d\n", getpid());
        printf("Parent: Child PID = %d\n", pid);

        wait(NULL); // انتظار انتهاء الطفل

        printf("Parent: Child terminated\n");
    }

    return 0;
}