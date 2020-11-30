use produccion
GO
CREATE VIEW pro.VistaQ2
AS
SELECT m.id, SUM(cantidadProduccion)cantidadProduccion, descripcion FROM 
pro.turnos t INNER JOIN maq.maquinas m ON m.id = t.maquinaId GROUP BY 
m.descripcion, m.id
GO


SELECT * FROM PRO.VistaQ2