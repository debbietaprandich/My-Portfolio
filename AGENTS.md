<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep all portfolio facts, links, metrics, and editable entries in `src/content/portfolio.ts` so non-layout updates have one source of truth.
- Use `SiteShell` in the root route for shared navigation, theme, CV, social contact, and footer behavior across all portfolio routes.
