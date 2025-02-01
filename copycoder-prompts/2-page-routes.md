Set up the page structure according to the following prompt:
   
<page-structure-prompt>
Next.js route structure based on navigation menu items (excluding main route). Make sure to wrap all routes with the component:

Routes:
- /home
- /cards
- /banking
- /transfer
- /settings

Page Implementations:
/home:
Core Purpose: Dashboard overview showing account summary and quick actions
Key Components
- AccountSummaryCard: Display balances and recent transactions
- QuickActionsGrid: Common banking operations
- NotificationCenter: Important alerts and updates
- ActivityFeed: Recent account activity
Layout Structure
- Grid-based responsive layout
- Main content area with sidebar
- Sticky header with notifications
- Mobile: Stack components vertically

/cards:
Core Purpose: Credit

/debit card management and details
Key Components:
- CardCarousel: Visual display of user's cards
- CardDetailsPanel: Show card information and limits
- TransactionHistory: Card-specific transactions
- CardSettingsMenu: Security and usage preferences
Layout Structure
- Card visualization at top
- Tabbed interface for different card features
- Split view for card details and transactions
- Mobile: Full-width cards with scrollable sections

/banking:
Core Purpose: Account management and banking services
Key Components
- AccountsList: All user accounts and balances
- TransactionFilters: Search and filter capabilities
- StatementDownload: Access to bank statements
- AccountAnalytics: Spending patterns and graphs
Layout Structure
- Two-column layout for accounts and details
- Expandable transaction list
- Floating action button for new transactions
- Mobile: Single column with collapsible sections

/transfer:
Core Purpose: Money transfer and payment functionality
Key Components
- TransferForm: Input fields for transfer details
- RecipientsList: Saved and recent recipients
- TransferConfirmation: Verification step
- TransferStatus: Success

/failure feedback
Layout Structure:
- Stepped form layout
- Side panel for recipients
- Progress indicator
- Mobile: Full-width form with progressive disclosure

/settings:
Core Purpose: Account settings and preferences management
Key Components
- ProfileSettings: Personal information
- SecuritySettings: Authentication and privacy
- NotificationPreferences: Alert management
- LanguageSelector: Interface language
Layout Structure
- Categorized settings in cards
- Navigation sidebar for categories
- Form-based settings panels
- Mobile: Accordion-style settings groups

Layouts:
MainLayout:
Applicable routes
- All routes
Core components
- Navigation header
- Side navigation menu
- Footer
- User profile menu
Responsive behavior
- Desktop: Fixed sidebar with content area
- Tablet: Collapsible sidebar
- Mobile: Bottom navigation bar

DashboardLayout
Applicable routes
- /home
- /banking
Core components
- Quick actions bar
- Content area with widgets
- Sidebar with summaries
Responsive behavior
- Desktop: Three-column layout
- Tablet: Two-column layout
- Mobile: Single column, stacked widgets

TransactionLayout
Applicable routes
- /transfer
- /cards (transaction sections)
Core components
- Transaction form container
- Status indicators
- Confirmation dialogs
Responsive behavior
- Desktop: Split view
- Tablet: Overlay panels
- Mobile: Full-screen forms with steps
</page-structure-prompt>