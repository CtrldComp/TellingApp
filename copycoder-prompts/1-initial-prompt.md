Initialize Next.js in current directory:
```bash
mkdir temp; cd temp; npx create-next-app@latest . -y --typescript --tailwind --eslint --app --use-npm --src-dir --import-alias "@/*" -no --turbo
```

Now let's move back to the parent directory and move all files except prompt.md.

For Windows (PowerShell):
```powershell
cd ..; Move-Item -Path "temp*" -Destination . -Force; Remove-Item -Path "temp" -Recurse -Force
```

For Mac/Linux (bash):
```bash
cd .. && mv temp/* temp/.* . 2>/dev/null || true && rm -rf temp
```

Set up the frontend according to the following prompt:
<frontend-prompt>
Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Make sure to concatenate strings correctly using backslash
3. Style with Tailwind CSS utility classes for responsive design
4. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
5. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
6. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
7. Create root layout.tsx page that wraps necessary navigation items to all pages
8. MUST implement the navigation elements items in their rightful place i.e. Left sidebar, Top header
9. Accurately implement necessary grid layouts
10. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

<summary_title>
Mobile Banking App with Split Payment and Analytics Features
</summary_title>

<image_analysis>

1. Navigation Elements:
- Bottom navigation bar with: Home, Cards, Banking, Transfer, Settings
- Back buttons in header for sub-pages
- Secondary navigation through transaction history


2. Layout Components:
- Main container: Full screen mobile viewport
- Header height: ~10% of screen
- Content area: ~80% of screen
- Bottom navigation: ~10% of screen
- Card components: 150x90px approximate size
- Padding: 16-24px consistent spacing


3. Content Sections:
- Balance display header
- Quick action buttons grid (2x2)
- Transaction list with merchant icons
- Analytics graph with date labels
- Recent recipients horizontal scroll
- Split payment details card


4. Interactive Controls:
- Primary action buttons (Send, Request, Split, Add)
- Transfer confirmation button
- Dropdown for account selection
- Amount input field
- User avatar selection
- Graph toggle between Spend/Income


5. Colors:
- Primary: #4B4DED (Blue)
- Background: #1C1C3D (Dark Navy)
- Text: #FFFFFF (White)
- Secondary: #2D2D4D (Dark Blue)
- Accent: Various transaction amounts in green/red


6. Grid/Layout Structure:
- 2-column grid for quick actions
- Flexible list layout for transactions
- Chart grid with 7-day display
- Responsive padding: 16px-24px
- Avatar grid: 40px circular elements
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── BottomNavigation
│   │   ├── Header
│   │   └── Container
│   ├── features/
│   │   ├── Balance
│   │   ├── QuickActions
│   │   ├── TransactionList
│   │   ├── Analytics
│   │   └── SplitPayment
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Balance display and management
- Money transfer and request
- Split payment functionality
- Transaction history
- Analytics and reporting
- User profile management


3. State Management:
```typescript
interface AppState {
├── user: {
│   ├── balance: number
│   ├── profile: UserProfile
│   └── settings: UserSettings
├── transactions: {
│   ├── recent: Transaction[]
│   ├── pending: Transaction[]
│   └── filters: TransactionFilters
├── splitPayment: {
│   ├── recipients: User[]
│   ├── amount: number
│   └── status: PaymentStatus
├── }
}
```


4. Routes:
```typescript
const routes = [
├── '/home',
├── '/transfer/*',
├── '/split/*',
├── '/analytics/*',
└── '/profile/*'
]
```


5. Component Architecture:
- MainLayout (container)
- NavigationBar (shared)
- BalanceCard (feature)
- ActionGrid (feature)
- TransactionList (feature)
- AnalyticsChart (feature)


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'small': 320px,
├── 'medium': 375px,
├── 'large': 414px,
└── 'xlarge': 428px
);
```
</development_planning>
</frontend-prompt>

IMPORTANT: Please ensure that (1) all KEY COMPONENTS and (2) the LAYOUT STRUCTURE are fully implemented as specified in the requirements. Ensure that the color hex code specified in image_analysis are fully implemented as specified in the requirements.