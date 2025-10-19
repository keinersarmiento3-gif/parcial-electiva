const estudiantes = [
  {
    cedula: "1010101010",
    apellidos: "Martínez López",
    nombres: "Camila Fernanda",
    programa: "Ingeniería Industrial",
    materias: ["Matemáticas", "Física", "Inglés"],
    promedioNotas: 8.80
  },
  {
    cedula: "2020202020",
    apellidos: "Gómez Rodríguez",
    nombres: "Santiago Andrés",
    programa: "Medicina",
    materias: ["Biología", "Anatomía", "Química"],
    promedioNotas: 9.40
  },
  {
    cedula: "3030303030",
    apellidos: "Ramírez Castillo",
    nombres: "Valeria Sofía",
    programa: "Derecho",
    materias: ["Constitución", "Derecho Penal", "Ética"],
    promedioNotas: 9.10
  },
  {
    cedula: "4040404040",
    apellidos: "Fernández Ruiz",
    nombres: "Juan Sebastián",
    programa: "Arquitectura",
    materias: ["Diseño", "Cálculo", "Geometría"],
    promedioNotas: 8.55
  },
  {
    cedula: "5050505050",
    apellidos: "Ortega Mendoza",
    nombres: "Laura Isabel",
    programa: "Psicología",
    materias: ["Psicología Social", "Humanidades", "Inglés"],
    promedioNotas: 9.75
  }
];
function agregarEstudiante(cedula, apellidos, nombres, programa, materias, promedioNotas) {
  const nuevoEstudiante = { cedula, apellidos, nombres, programa, materias, promedioNotas };
  estudiantes.push(nuevoEstudiante);
  console.log("Estudiante agregado:");
  console.table(nuevoEstudiante);
}
function listarEstudiantes() {
  const ordenados = [...estudiantes].sort((a, b) => a.apellidos.localeCompare(b.apellidos));
  console.log("\nLista de estudiantes (ordenada por apellidos):");
  console.table(ordenados);
}
function buscarEstudiante(cedula) {
  const estudiante = estudiantes.find(e => e.cedula === cedula);
  if (estudiante) {
    console.log("\nEstudiante encontrado:");
    console.table(estudiante);
  } else {
    console.log(`\nNo se encontró ningún estudiante con la cédula ${cedula}`);
  }
}
function actualizarEstudiante(cedula, nuevosDatos) {
  const index = estudiantes.findIndex(e => e.cedula === cedula);

  if (index !== -1) {
    estudiantes[index] = { ...estudiantes[index], ...nuevosDatos };
    console.log("\nEstudiante actualizado:");
    console.table(estudiantes[index]);
  } else {
    console.log("\nNo se encontró ningún estudiante para actualizar.");
  }
}
function eliminarEstudiante() {
  const eliminado = estudiantes.pop();
  if (eliminado) {
    console.log("\nEstudiante eliminado:");
    console.table(eliminado);
  } else {
    console.log("\nNo hay estudiantes para eliminar.");
  }
}
agregarEstudiante(
  "6060606060",
  "Ruiz Cabrera",
  "Nicolás Mateo",
  "Ingeniería Electrónica",
  ["Programación", "Circuitos", "Matemáticas"],
  8.95
);

listarEstudiantes();
buscarEstudiante("2020202020"); 
buscarEstudiante("9999999999");
actualizarEstudiante("1010101010", {
  programa: "Ingeniería Mecánica",
  promedioNotas: 9.00
});
eliminarEstudiante();
