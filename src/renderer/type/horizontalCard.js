const renderHorizontal = ({ riddle, answer, color }) => {
  const renderedSVG = `<svg width="600" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
                * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
                }
                .container {
                font-family: Arial, Helvetica, sans-serif;
                padding: 20px;
                width: 600px;
                background-color: #${color.background};
                border: 1px solid rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                }
                .container h3 {
                font-size: 19px;
                margin-bottom: 5px;
                font-weight: 500;
                font-style: oblique;
                color: #${color.riddle};
                }
                .container h3::after {
                content: close-riddle;
                vertical-align: sub;
                font-size: 25px;
                color: #${color.symbol};
                }
                .container p {
                /* float: right; */
                /* margin-right: 20px; */
                font-style: italic;
                padding: 5px;
                text-align: right;
                color: #${color.answer};
                }
            </style>
            <div class="container">
                <h3> ${riddle}</h3>
                <p>- ${answer}</p>
            </div>
        </div>
    </foreignObject>
</svg>
    `;
  return renderedSVG;
};

module.exports = renderHorizontal;
