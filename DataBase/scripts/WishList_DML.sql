USE WishList
GO

INSERT INTO Usuarios(email,senha)
VALUES	('felipe@email.com', '1234'),
		('samuel@uol.com', '5678')
GO

INSERT INTO Desejos(idUsuario,descricao)
VALUES	(1, 'me tornar um desenvolvedor sênior'),
		(1, 'morar na praia'),
		(2, 'ficar milionário')