CREATE TABLE IF NOT EXISTS usuarios (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(60) DEFAULT NULL,
  apellido varchar(60) DEFAULT NULL,
  email varchar(30) DEFAULT NULL,
  password varchar(60) DEFAULT NULL,
  telefono varchar(10) DEFAULT NULL,
  admin tinyint(1) DEFAULT NULL,
  confirmado tinyint(1) DEFAULT NULL,
  token varchar(15) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 

CREATE TABLE IF NOT EXISTS servicios (
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(60) DEFAULT NULL,
  precio decimal(5,2) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 

CREATE TABLE IF NOT EXISTS citas (
  id int NOT NULL AUTO_INCREMENT,
  fecha date DEFAULT NULL,
  hora time DEFAULT NULL,
  usuarioId int DEFAULT NULL,
  PRIMARY KEY (id),
  KEY citas_usuarios_idx (usuarioId),
  CONSTRAINT citas_usuarios FOREIGN KEY (usuarioId) REFERENCES usuarios (id) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 

CREATE TABLE IF NOT EXISTS citasServicios (
  id int NOT NULL AUTO_INCREMENT,
  citaId int DEFAULT NULL,
  servicioId int DEFAULT NULL,
  PRIMARY KEY (id),
  KEY citaId_idx (citaId),
  KEY servicioId_idx (servicioId),
  CONSTRAINT citasServicios_ibfk_1 FOREIGN KEY (citaId) REFERENCES citas (id) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT citasServicios_ibfk_2 FOREIGN KEY (servicioId) REFERENCES servicios (id) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 