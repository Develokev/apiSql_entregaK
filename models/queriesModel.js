const queries={
    entryModelByEmail:`
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`,

    allEntries:`
    SELECT *
    FROM entries`,

    createEntry:`
    INSERT INTO entries (title, content, date, id_author, category)
    VALUES ($1, $2, $3, $4, $5)`,

    updateEntryQuery:`
    UPDATE entries
    SET title=$1,content=$2,date=$3,id_author=$4, category=$5
    WHERE id_entry=$6`,

    authorByEmailQuery:`
    SELECT a.name,a.surname,a.email,a.image,a.name,a.surname,a.image,e.title,e.content,e.date,e.category
    FROM authors AS a
    INNER JOIN entries AS e
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY a.name;`,

    allAuthorsQuery:`
    SELECT *
    FROM  authors`,

    createAuthorQuery:`
    INSERT INTO authors (name, surname, email, image)
    VALUES ($1, $2, $3, $4)`,

    updateAuthorQuery:`
    UPDATE entries
    SET title=$1,content=$2,date=$3,id_author=$4, category=$5
    WHERE id_entry=$6`,

}

module.exports=queries;