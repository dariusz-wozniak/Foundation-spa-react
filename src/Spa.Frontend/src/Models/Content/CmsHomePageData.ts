import Property, {StringProperty, NumberProperty, BooleanProperty, ContentReferenceProperty, ContentAreaProperty, LinkListProperty, LinkProperty} from '@episerver/spa-core/Property'
import IContent, { BaseIContent } from '@episerver/spa-core/Models/IContent'
import ContentLink from '@episerver/spa-core/Models/ContentLink'
import { ComponentProps } from '@episerver/spa-core/EpiComponent'

/**
 * Cms Home Page
 *
 * Used for home page of all sites
 *
 * @GUID 452d1812-7385-42c3-8073-c1b7481e7b20
 */
export default interface CmsHomePageData extends IContent {
    /**
     * Main menu
     *
     * No description available
     */
    mainMenu: ContentAreaProperty

    /**
     * Introduction
     *
     * No description available
     */
    introduction: StringProperty

    /**
     * Site logo
     *
     * No description available
     */
    siteLogo: ContentReferenceProperty

    /**
     * Search page
     *
     * No description available
     */
    searchPage: ContentReferenceProperty

    /**
     * Categories
     *
     * Categories associated with this content.
     */
    categories: Property<Array<ContentLink>>

    /**
     * Banner text
     *
     * No description available
     */
    bannerText: StringProperty

    /**
     * Company header
     *
     * No description available
     */
    companyHeader: StringProperty

    /**
     * Company name
     *
     * No description available
     */
    companyName: StringProperty

    /**
     * Comapny address
     *
     * No description available
     */
    companyAddress: StringProperty

    /**
     * Reset password
     *
     * No description available
     */
    resetPasswordMail: ContentReferenceProperty

    /**
     * Menu style
     *
     * No description available
     */
    headerMenuStyle: StringProperty

    /**
     * My account menu (CMS)
     *
     * This menu will show if show commerce components in header is false
     */
    myAccountCmsMenu: LinkListProperty

    /**
     * Company phone
     *
     * No description available
     */
    companyPhone: StringProperty

    /**
     * Reset password page
     *
     * No description available
     */
    resetPasswordPage: ContentReferenceProperty

    /**
     * Company email
     *
     * No description available
     */
    companyEmail: StringProperty

    /**
     * Teaser ratio (width-height)
     *
     * No description available
     */
    teaserRatio: StringProperty

    /**
     * Links header
     *
     * No description available
     */
    linksHeader: StringProperty

    /**
     * Links
     *
     * No description available
     */
    links: LinkListProperty

    /**
     * Social header
     *
     * No description available
     */
    socialHeader: StringProperty

    /**
     * Social links
     *
     * No description available
     */
    socialLinks: LinkListProperty

    /**
     * Content area
     *
     * No description available
     */
    contentArea: ContentAreaProperty

    /**
     * Main body
     *
     * No description available
     */
    mainBody: StringProperty

    /**
     * Title
     *
     * No description available
     */
    metaTitle: StringProperty

    /**
     * Exclude from results
     *
     * This will determine whether or not to show on search
     */
    excludeFromSearch: BooleanProperty

    /**
     * Image
     *
     * No description available
     */
    pageImage: ContentReferenceProperty

    /**
     * CSS files
     *
     * No description available
     */
    cssFiles: LinkListProperty

    /**
     * Script files
     *
     * No description available
     */
    scriptFiles: LinkListProperty

    /**
     * Copyright
     *
     * No description available
     */
    footerCopyrightText: StringProperty

    /**
     * Top content area
     *
     * No description available
     */
    topContentArea: ContentAreaProperty

    /**
     * Content Manager
     *
     * No description available
     */
    contentManager: ContentAreaProperty

    /**
     * Main content area
     *
     * No description available
     */
    mainContentArea: ContentAreaProperty

    /**
     * Keywords
     *
     * No description available
     */
    keywords: StringProperty

    /**
     * Hide site header
     *
     * No description available
     */
    hideSiteHeader: BooleanProperty

    /**
     * Video
     *
     * No description available
     */
    teaserVideo: ContentReferenceProperty

    /**
     * CSS
     *
     * No description available
     */
    css: StringProperty

    /**
     * Scripts
     *
     * No description available
     */
    scripts: StringProperty

    /**
     * Bottom content area
     *
     * No description available
     */
    bottomContentArea: ContentAreaProperty

    /**
     * Page description
     *
     * No description available
     */
    pageDescription: StringProperty

    /**
     * Hide site footer
     *
     * No description available
     */
    hideSiteFooter: BooleanProperty

    /**
     * Text
     *
     * No description available
     */
    teaserText: StringProperty

    /**
     * Content type
     *
     * No description available
     */
    metaContentType: StringProperty

    /**
     * Industry
     *
     * No description available
     */
    industry: StringProperty

    /**
     * Author
     *
     * No description available
     */
    authorMetaData: StringProperty

    /**
     * Disable indexing
     *
     * No description available
     */
    disableIndexing: BooleanProperty

    /**
     * Highlight in page list
     *
     * No description available
     */
    highlight: BooleanProperty

    /**
     * Text alignment
     *
     * No description available
     */
    teaserTextAlignment: StringProperty

    /**
     * Color theme
     *
     * No description available
     */
    teaserColorTheme: StringProperty

    /**
     * Button label
     *
     * No description available
     */
    teaserButtonText: StringProperty

    /**
     * Button theme
     *
     * No description available
     */
    teaserButtonStyle: StringProperty

    /**
     * Display hover effect
     *
     * No description available
     */
    applyHoverEffect: BooleanProperty

    /**
     * Padding
     *
     * No description available
     */
    padding: StringProperty

    /**
     * Margin
     *
     * No description available
     */
    margin: StringProperty

}

/**
 * Convenience interface for componentDidUpdate & componentDidMount methods.
 */
export interface CmsHomePageProps extends ComponentProps<CmsHomePageData> {}

export class CmsHomePageType extends BaseIContent<CmsHomePageData> implements CmsHomePageData {
    protected _typeName : string = "CmsHomePage";
    /**
     * Map of all property types within this content type.
     */
    protected _propertyMap : { [propName: string]: string } = {
        'mainMenu': 'ContentArea',
        'introduction': 'LongString',
        'siteLogo': 'ContentReference',
        'searchPage': 'ContentReference',
        'categories': 'ContentReferenceList',
        'bannerText': 'XhtmlString',
        'companyHeader': 'LongString',
        'companyName': 'LongString',
        'companyAddress': 'LongString',
        'resetPasswordMail': 'ContentReference',
        'headerMenuStyle': 'LongString',
        'myAccountCmsMenu': 'LinkCollection',
        'companyPhone': 'LongString',
        'resetPasswordPage': 'ContentReference',
        'companyEmail': 'LongString',
        'teaserRatio': 'LongString',
        'linksHeader': 'LongString',
        'links': 'LinkCollection',
        'socialHeader': 'LongString',
        'socialLinks': 'LinkCollection',
        'contentArea': 'ContentArea',
        'mainBody': 'XhtmlString',
        'metaTitle': 'LongString',
        'excludeFromSearch': 'Boolean',
        'pageImage': 'ContentReference',
        'cssFiles': 'LinkCollection',
        'scriptFiles': 'LinkCollection',
        'footerCopyrightText': 'LongString',
        'topContentArea': 'ContentArea',
        'contentManager': 'ContentArea',
        'mainContentArea': 'ContentArea',
        'keywords': 'LongString',
        'hideSiteHeader': 'Boolean',
        'teaserVideo': 'ContentReference',
        'css': 'LongString',
        'scripts': 'LongString',
        'bottomContentArea': 'ContentArea',
        'pageDescription': 'LongString',
        'hideSiteFooter': 'Boolean',
        'teaserText': 'LongString',
        'metaContentType': 'LongString',
        'industry': 'LongString',
        'authorMetaData': 'LongString',
        'disableIndexing': 'Boolean',
        'highlight': 'Boolean',
        'teaserTextAlignment': 'LongString',
        'teaserColorTheme': 'LongString',
        'teaserButtonText': 'LongString',
        'teaserButtonStyle': 'LongString',
        'applyHoverEffect': 'Boolean',
        'padding': 'LongString',
        'margin': 'LongString',
    }

    /**
     * Main menu
     *
     * No description available
     */
    public mainMenu: ContentAreaProperty;

    /**
     * Introduction
     *
     * No description available
     */
    public introduction: StringProperty;

    /**
     * Site logo
     *
     * No description available
     */
    public siteLogo: ContentReferenceProperty;

    /**
     * Search page
     *
     * No description available
     */
    public searchPage: ContentReferenceProperty;

    /**
     * Categories
     *
     * Categories associated with this content.
     */
    public categories: Property<Array<ContentLink>>;

    /**
     * Banner text
     *
     * No description available
     */
    public bannerText: StringProperty;

    /**
     * Company header
     *
     * No description available
     */
    public companyHeader: StringProperty;

    /**
     * Company name
     *
     * No description available
     */
    public companyName: StringProperty;

    /**
     * Comapny address
     *
     * No description available
     */
    public companyAddress: StringProperty;

    /**
     * Reset password
     *
     * No description available
     */
    public resetPasswordMail: ContentReferenceProperty;

    /**
     * Menu style
     *
     * No description available
     */
    public headerMenuStyle: StringProperty;

    /**
     * My account menu (CMS)
     *
     * This menu will show if show commerce components in header is false
     */
    public myAccountCmsMenu: LinkListProperty;

    /**
     * Company phone
     *
     * No description available
     */
    public companyPhone: StringProperty;

    /**
     * Reset password page
     *
     * No description available
     */
    public resetPasswordPage: ContentReferenceProperty;

    /**
     * Company email
     *
     * No description available
     */
    public companyEmail: StringProperty;

    /**
     * Teaser ratio (width-height)
     *
     * No description available
     */
    public teaserRatio: StringProperty;

    /**
     * Links header
     *
     * No description available
     */
    public linksHeader: StringProperty;

    /**
     * Links
     *
     * No description available
     */
    public links: LinkListProperty;

    /**
     * Social header
     *
     * No description available
     */
    public socialHeader: StringProperty;

    /**
     * Social links
     *
     * No description available
     */
    public socialLinks: LinkListProperty;

    /**
     * Content area
     *
     * No description available
     */
    public contentArea: ContentAreaProperty;

    /**
     * Main body
     *
     * No description available
     */
    public mainBody: StringProperty;

    /**
     * Title
     *
     * No description available
     */
    public metaTitle: StringProperty;

    /**
     * Exclude from results
     *
     * This will determine whether or not to show on search
     */
    public excludeFromSearch: BooleanProperty;

    /**
     * Image
     *
     * No description available
     */
    public pageImage: ContentReferenceProperty;

    /**
     * CSS files
     *
     * No description available
     */
    public cssFiles: LinkListProperty;

    /**
     * Script files
     *
     * No description available
     */
    public scriptFiles: LinkListProperty;

    /**
     * Copyright
     *
     * No description available
     */
    public footerCopyrightText: StringProperty;

    /**
     * Top content area
     *
     * No description available
     */
    public topContentArea: ContentAreaProperty;

    /**
     * Content Manager
     *
     * No description available
     */
    public contentManager: ContentAreaProperty;

    /**
     * Main content area
     *
     * No description available
     */
    public mainContentArea: ContentAreaProperty;

    /**
     * Keywords
     *
     * No description available
     */
    public keywords: StringProperty;

    /**
     * Hide site header
     *
     * No description available
     */
    public hideSiteHeader: BooleanProperty;

    /**
     * Video
     *
     * No description available
     */
    public teaserVideo: ContentReferenceProperty;

    /**
     * CSS
     *
     * No description available
     */
    public css: StringProperty;

    /**
     * Scripts
     *
     * No description available
     */
    public scripts: StringProperty;

    /**
     * Bottom content area
     *
     * No description available
     */
    public bottomContentArea: ContentAreaProperty;

    /**
     * Page description
     *
     * No description available
     */
    public pageDescription: StringProperty;

    /**
     * Hide site footer
     *
     * No description available
     */
    public hideSiteFooter: BooleanProperty;

    /**
     * Text
     *
     * No description available
     */
    public teaserText: StringProperty;

    /**
     * Content type
     *
     * No description available
     */
    public metaContentType: StringProperty;

    /**
     * Industry
     *
     * No description available
     */
    public industry: StringProperty;

    /**
     * Author
     *
     * No description available
     */
    public authorMetaData: StringProperty;

    /**
     * Disable indexing
     *
     * No description available
     */
    public disableIndexing: BooleanProperty;

    /**
     * Highlight in page list
     *
     * No description available
     */
    public highlight: BooleanProperty;

    /**
     * Text alignment
     *
     * No description available
     */
    public teaserTextAlignment: StringProperty;

    /**
     * Color theme
     *
     * No description available
     */
    public teaserColorTheme: StringProperty;

    /**
     * Button label
     *
     * No description available
     */
    public teaserButtonText: StringProperty;

    /**
     * Button theme
     *
     * No description available
     */
    public teaserButtonStyle: StringProperty;

    /**
     * Display hover effect
     *
     * No description available
     */
    public applyHoverEffect: BooleanProperty;

    /**
     * Padding
     *
     * No description available
     */
    public padding: StringProperty;

    /**
     * Margin
     *
     * No description available
     */
    public margin: StringProperty;

}
