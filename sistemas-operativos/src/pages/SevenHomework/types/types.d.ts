export type ProcessType = {
    id: number; 
    firstNumber: number; 
    secondNumber: number;
    operation: number; 
    time: number; 
    timeLeft?: number; 
    quantumTime?: number; 
    status: "Nuevo" | "Listo" | "Ejecutando" | "Terminado" | "Error" | "Bloqueado"; 
    startTime?: number; 
    endTime?: number; 
    responseTime?: number; 
    returnTime?: number; 
    waitTime?: number;
    onSave?: boolean; 
    index?: number;
    memorySize: number; 
}

export type MemoryType = {
    id: number;
    occupied: number;
    process: number | null;
}