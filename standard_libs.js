let libs = {
    ['Stdio']: `function println() {
pop edi
pop edx
pop ecx
mov ebx, 1     
mov eax, 4   
int 0x80      
push edi
ret
}`
}

export default libs;