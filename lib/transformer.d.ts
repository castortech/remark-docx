import { Paragraph, ParagraphChild, Table, TableOfContents, HeadingLevel, AlignmentType, IImageOptions } from "docx";
import type { IPropertiesOptions } from "docx/build/file/core-properties";
import type * as mdast from "./models/mdast";
export type headingLevel = (typeof HeadingLevel)[keyof typeof HeadingLevel];
export type alignmentType = (typeof AlignmentType)[keyof typeof AlignmentType];
export type ImageDataMap = {
    [url: string]: ImageData;
};
export type ImageData = {
    image: IImageOptions["data"];
    width: number;
    height: number;
};
export type ImageResolver = (url: string) => Promise<ImageData> | ImageData;
export interface DocxOptions extends Pick<IPropertiesOptions, "title" | "subject" | "creator" | "keywords" | "description" | "lastModifiedBy" | "revision" | "externalStyles" | "styles" | "background"> {
    /**
     * Set output type of `VFile.result`. `buffer` is `Promise<Buffer>`. `blob` is `Promise<Blob>`.
     */
    output?: "buffer" | "blob";
    /**
     * **You must set** if your markdown includes images. See example for [browser](https://github.com/inokawa/remark-docx/blob/main/stories/playground.stories.tsx) and [Node.js](https://github.com/inokawa/remark-docx/blob/main/src/index.spec.ts).
     */
    imageResolver?: ImageResolver;
}
type DocxChild = Paragraph | Table | TableOfContents;
type DocxContent = DocxChild | ParagraphChild;
export interface Footnotes {
    [key: string]: {
        children: Paragraph[];
    };
}
export interface ConvertNodesReturn {
    nodes: DocxContent[];
    footnotes: Footnotes;
}
export declare const mdastToDocx: (node: mdast.Root, { output, title, subject, creator, keywords, description, lastModifiedBy, revision, externalStyles, styles, background, }: DocxOptions, images: ImageDataMap) => Promise<any>;
export {};
