import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default function Footer() {
    return (
        <div
            css={css`
                padding: 32px 0;
                background-color: rgba(0, 0, 0, 0.9);
                `}
            >
                <div
            css={css`
                margin: 0 auto;
                max-width: 700px;
                padding: ${rhythm(2)};
                padding-top: ${rhythm(1.5)}
            `}
        >
            <Link to={`/`}>
                <h3
                    css={css`
                        margin-bottom: ${rhythm(2)};
                        display: inline-block;
                        font-style: normal;
                        font-weight: 600;
                        font-family: Spectral;
                        letter-spacing: .225rem;
                        color: white;
                    `}
                >
                    WHOLLY GOSPEL
                </h3>
            </Link>
            <Link
                to={`/about/`}
                css={css`
                    float: right;
                    color: white;
                    text-decoration: none;
                `}
            >
                About
            </Link>
            </div>
        </div>
    )
}