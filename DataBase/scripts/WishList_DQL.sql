USE WishList
GO

SELECT * FROM Usuarios

SELECT * FROM Desejos

SELECT idDesejo, D.idUsuario AS [User], email, descricao FROM Usuarios U
INNER JOIN Desejos D
ON U.idUsuario = D.idUsuario