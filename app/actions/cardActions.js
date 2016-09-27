export const addCardfunction = (title, description, status,dayIndex) => ({
        type: "ADD_CARD",
        title: title,
        description: description,
        status: status,
        dayIndex: dayIndex,
});

export const deleteCard = (id,dayIndex) => ({
        type: "DELETE_CARD",
        id: id,
        dayIndex: dayIndex,
});

export const updateCardStatus = (id,status,dayIndex)=> ({
        type: "UPDATE_CARD_STATUS",
        id: id,
        status: status,
        dayIndex: dayIndex,
});

export const editDescription = (id,updatedDescription,dayIndex) => ({
        type: "UPDATE_CARD_DESCRIPTION",
        id:id,
        description: updatedDescription,
        dayIndex:dayIndex,
});

export const addTitle = (e) => ({
        type: "ADD_CARD_TITLE",
        title: e.target.value,
});

export const addDescription = (e) => ({
        type: "ADD_CARD_DESCRIPTION",
        description: e.target.value,
});

export const newDescription = (e) => ({
        type: "NEW_CARD_DESCRIPTION",
        description: e.target.value,
});




