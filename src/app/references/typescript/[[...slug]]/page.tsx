import { getTDocPage } from "@/app/references/components/TDoc/PageLayout";
import Content from "./content.mdx";
import { fetchTypeScriptDoc } from "@/app/references/components/TDoc/fetchDocs/fetchTypeScriptDoc";

const config = getTDocPage({
	sdkTitle: "TypeScript SDK",
	getDoc: fetchTypeScriptDoc,
	indexContent: <Content />,
	packageSlug: "typescript",
});

export default config.default;
export const generateStaticParams = config.generateStaticParams;
export const generateMetadata = config.generateMetadata;
export const dynamicParams = config.dynamicParams;