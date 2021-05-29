USE WishList
GO

INSERT INTO Usuarios(email,senha)
VALUES	('felipe@email.com', '1234'),
		('samuel@uol.com', '5678')
GO

INSERT INTO Desejos(idUsuario,descricao,dataDesejo)
VALUES	(1, 'me tornar um desenvolvedor sênior', '2021-05-29'),
		(1, 'morar na praia', '2021-05-30'),
		(2, 'ficar milionário', '2030-06-25')