const emojis = [
    {
        emoji: "😀",
        description: "Cara sonriente"
    },
    {
        emoji: "😂",
        description: "Cara con lágrimas de risa"
    },
    {
        emoji: "😍",
        description: "Cara con ojos de corazón"
    },
    {
        emoji: "🤔",
        description: "Cara pensando"
    }
]
export const Contact = () => {
    return (
        <div className="contactPage pageContainer">
            <h1>Contact View</h1>
            <p className="contactParagraph">Reading a array of objects</p>
            <div className="contactCardContainer">
                {emojis.map((emoji, index) => (
                    <div key={index} className="contactCard">
                        <span >
                            {emoji.emoji}
                            <p>{emoji.description}</p>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
