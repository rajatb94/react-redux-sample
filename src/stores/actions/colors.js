export const changeBackgroundColor = content => ({
    type: "CHANGE_BACKGROUND_COLOR",
    payload: {
        color: content.color
    }
});

export const changeTextColor = content => ({
    type: "CHANGE_TEXT_COLOR",
    payload: {
        color: content.color
    }
});
