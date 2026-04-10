<template>
   <div class="index-page">
      <section class="index-page__hero">
         <h1 class="index-page__title">ALF Documentation</h1>
         <p class="index-page__subtitle">
            A Rust-built TUI for searching and running your shell aliases and functions. Install it,
            run <code>alf init</code>, then press <kbd>Ctrl-G</kbd> from anywhere in your shell.
         </p>
         <div class="index-page__cta">
            <a class="index-page__cta-primary" href="#getting-started">Get Started</a>
            <a class="index-page__cta-secondary" href="#shell-integration">Shell Integration</a>
         </div>
      </section>

      <section class="index-page__cards">
         <h2 class="index-page__section-heading">Featured Documentation</h2>
         <div class="index-page__card-grid">
            <a class="index-page__card" href="#getting-started">
               <h3 class="index-page__card-title">Getting Started</h3>
               <p class="index-page__card-desc">
                  Install from cargo. First run takes under a minute.
               </p>
            </a>
            <a class="index-page__card" href="#shell-integration">
               <h3 class="index-page__card-title">Shell Integration</h3>
               <p class="index-page__card-desc">
                  Add the shell hook for Ctrl-G prompt integration.
               </p>
            </a>
            <a class="index-page__card" href="#configuration">
               <h3 class="index-page__card-title">Configuration</h3>
               <p class="index-page__card-desc">
                  Configure sources, fuzzy search, and themes via a TOML file.
               </p>
            </a>
            <a class="index-page__card" href="#keybindings">
               <h3 class="index-page__card-title">Keybindings</h3>
               <p class="index-page__card-desc">
                  vim-style navigation. Tab to populate, Enter to execute.
               </p>
            </a>
         </div>
      </section>

      <section class="index-page__section" id="getting-started">
         <h2 class="index-page__section-heading">Getting Started</h2>

         <div class="index-page__subsection" id="installation">
            <h3 class="index-page__subsection-heading">Installation</h3>
            <p class="index-page__prose">Install from crates.io (recommended):</p>
            <pre class="index-page__code-block"><code>cargo install alf</code></pre>
            <p class="index-page__prose">Or install directly from source:</p>
            <pre
               class="index-page__code-block"
            ><code>cargo install --git https://github.com/metal-gabe/alf-cli</code></pre>
            <p class="index-page__note">
               Requires Rust 1.74.0 or newer. Run <code>rustup update</code> if needed.
            </p>
         </div>

         <div class="index-page__subsection" id="quick-start">
            <h3 class="index-page__subsection-heading">Quick Start</h3>
            <p class="index-page__prose">
               Run the one-time initialization wizard. It auto-detects standard shell files, asks
               about any additional paths, and lets you pick a theme.
            </p>
            <pre class="index-page__code-block"><code>alf init</code></pre>
            <p class="index-page__prose">Then launch the TUI:</p>
            <pre class="index-page__code-block"><code>alf</code></pre>
            <p class="index-page__prose">
               You can also pass an initial search query to pre-filter on startup:
            </p>
            <pre class="index-page__code-block"><code>alf search "git"</code></pre>
         </div>
      </section>

      <section class="index-page__section" id="shell-integration">
         <h2 class="index-page__section-heading">Shell Integration</h2>

         <div class="index-page__subsection" id="shell-setup">
            <h3 class="index-page__subsection-heading">Setup</h3>
            <p class="index-page__prose">
               Add the shell hook to enable the <code>alf()</code> wrapper function and the
               <code>Ctrl-G</code> keybinding that opens the picker directly from the prompt.
            </p>
            <pre class="index-page__code-block"><code># zsh — add to ~/.zshrc
eval "$(alf shell-hook zsh)"</code></pre>
            <pre class="index-page__code-block"><code># bash — add to ~/.bashrc
eval "$(alf shell-hook bash)"</code></pre>
            <p class="index-page__prose">
               Tab and Enter behave differently once the hook is sourced:
            </p>
            <div class="index-page__table-wrap">
               <table class="index-page__table">
                  <thead>
                     <tr>
                        <th>Key</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Tab</td>
                        <td>
                           Populate the shell prompt with the selected entry — does not execute
                        </td>
                     </tr>
                     <tr>
                        <td>Enter</td>
                        <td>Execute the selected entry immediately and add it to history</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div class="index-page__subsection" id="keybind">
            <h3 class="index-page__subsection-heading">Rebinding</h3>
            <p class="index-page__prose">
               The widget is bound to <code>Ctrl-G</code> by default. To use a different key:
            </p>
            <pre class="index-page__code-block"><code># zsh
bindkey '^T' __alf_widget</code></pre>
            <pre class="index-page__code-block"><code># bash
bind -x '"\C-t": __alf_widget'</code></pre>
            <p class="index-page__note">
               In bash, pressing Tab inside the TUI cannot populate the readline buffer — this is a
               readline limitation outside of <code>bind -x</code> handlers. Use the
               <code>Ctrl-G</code> binding instead for in-place population.
            </p>
         </div>

         <div class="index-page__subsection" id="how-it-works">
            <h3 class="index-page__subsection-heading">How It Works</h3>
            <ol class="index-page__list">
               <li>
                  Reads the shell config files listed in your <code>config.toml</code> (glob
                  patterns supported).
               </li>
               <li>
                  Extracts aliases, functions, and their preceding comment descriptions via regex.
               </li>
               <li>Presents a ratatui TUI with fuzzy search powered by nucleo-matcher.</li>
               <li>
                  On Tab or Enter, writes the selection to a temp file that the shell hook reads to
                  populate or execute.
               </li>
            </ol>
         </div>
      </section>

      <section class="index-page__section" id="configuration">
         <h2 class="index-page__section-heading">Configuration</h2>

         <div class="index-page__subsection" id="config-file">
            <h3 class="index-page__subsection-heading">Config File</h3>
            <p class="index-page__prose">
               The config file is created after running <code>alf init</code>:
            </p>
            <div class="index-page__table-wrap">
               <table class="index-page__table">
                  <thead>
                     <tr>
                        <th>Platform</th>
                        <th>Path</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Linux / macOS</td>
                        <td>~/.config/alf/config.toml</td>
                     </tr>
                     <tr>
                        <td>Windows</td>
                        <td>%APPDATA%\alf\config.toml</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <p class="index-page__prose">
               Use <code>alf config show</code> to print current values,
               <code>alf config edit</code> to open the file in <code>$EDITOR</code>, and
               <code>alf config reset</code> to restore defaults.
            </p>
         </div>

         <div class="index-page__subsection" id="general-options">
            <h3 class="index-page__subsection-heading">General</h3>
            <pre class="index-page__code-block"><code>[general]
shell_files = [
    "~/.zshrc",
    "~/.config/zsh/**/*.zsh",
]
alias_expansion = "Name"</code></pre>
            <div class="index-page__table-wrap">
               <table class="index-page__table">
                  <thead>
                     <tr>
                        <th>Key</th>
                        <th>Description</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>shell_files</td>
                        <td>
                           List of shell files to parse. Supports glob patterns and <code>~</code> /
                           <code>$HOME</code> expansion.
                        </td>
                     </tr>
                     <tr>
                        <td>alias_expansion</td>
                        <td>
                           <code>"Name"</code> (default) populates the alias name on Tab;
                           <code>"script"</code> populates the full command body.
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div class="index-page__subsection" id="search-options">
            <h3 class="index-page__subsection-heading">Search</h3>
            <pre class="index-page__code-block"><code>[search]
case_matching = "smart"
normalize = true
enable_regex = true
substring_matching = true</code></pre>
            <div class="index-page__table-wrap">
               <table class="index-page__table">
                  <thead>
                     <tr>
                        <th>Key</th>
                        <th>Description</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>case_matching</td>
                        <td>
                           <code>"ignore"</code>, <code>"smart"</code> (default — case-insensitive
                           unless uppercase is typed), or <code>"respect"</code>.
                        </td>
                     </tr>
                     <tr>
                        <td>normalize</td>
                        <td>Apply Unicode normalization before matching.</td>
                     </tr>
                     <tr>
                        <td>enable_regex</td>
                        <td>Allow regex patterns in the search bar.</td>
                     </tr>
                     <tr>
                        <td>substring_matching</td>
                        <td>Match substrings in addition to prefix/fuzzy matches.</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div class="index-page__subsection" id="ui-options">
            <h3 class="index-page__subsection-heading">UI &amp; Display</h3>
            <pre class="index-page__code-block"><code>[ui]
theme = "default"
keybind_mode = "vim"

[display]
show_type_badges = true
syntax_highlighting = true
parse_comments = true</code></pre>
            <div class="index-page__table-wrap">
               <table class="index-page__table">
                  <thead>
                     <tr>
                        <th>Key</th>
                        <th>Description</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>theme</td>
                        <td>
                           Color theme name. See the <a href="#themes">Themes</a> section for all
                           options.
                        </td>
                     </tr>
                     <tr>
                        <td>keybind_mode</td>
                        <td>Currently only <code>"vim"</code> is supported.</td>
                     </tr>
                     <tr>
                        <td>show_type_badges</td>
                        <td>
                           Show <code>alias</code> / <code>function</code> badges next to each
                           entry.
                        </td>
                     </tr>
                     <tr>
                        <td>syntax_highlighting</td>
                        <td>Enable syntax highlighting in the script detail panel.</td>
                     </tr>
                     <tr>
                        <td>parse_comments</td>
                        <td>
                           Extract and display comments preceding aliases and functions as
                           descriptions.
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      <section class="index-page__section" id="keybindings">
         <h2 class="index-page__section-heading">Keybindings</h2>

         <div class="index-page__subsection" id="normal-mode">
            <h3 class="index-page__subsection-heading">Normal Mode</h3>
            <div class="index-page__table-wrap">
               <table class="index-page__table">
                  <thead>
                     <tr>
                        <th>Key</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>j / ↓</td>
                        <td>Move down one entry</td>
                     </tr>
                     <tr>
                        <td>k / ↑</td>
                        <td>Move up one entry</td>
                     </tr>
                     <tr>
                        <td>G</td>
                        <td>Jump to bottom</td>
                     </tr>
                     <tr>
                        <td>gg</td>
                        <td>Jump to top</td>
                     </tr>
                     <tr>
                        <td>Ctrl-U</td>
                        <td>Scroll up 10 lines</td>
                     </tr>
                     <tr>
                        <td>Ctrl-D</td>
                        <td>Scroll down 10 lines</td>
                     </tr>
                     <tr>
                        <td>Ctrl-B</td>
                        <td>Page up (20 lines)</td>
                     </tr>
                     <tr>
                        <td>Ctrl-F</td>
                        <td>Page down (20 lines)</td>
                     </tr>
                     <tr>
                        <td>/ or i</td>
                        <td>Enter search mode</td>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td>Show aliases only</td>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td>Show functions only</td>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td>Show all entries</td>
                     </tr>
                     <tr>
                        <td>n / p</td>
                        <td>Cycle to next / previous panel</td>
                     </tr>
                     <tr>
                        <td>tj / tk</td>
                        <td>Cycle theme forward / backward</td>
                     </tr>
                     <tr>
                        <td>og / oG</td>
                        <td>Cycle group mode forward / backward</td>
                     </tr>
                     <tr>
                        <td>os</td>
                        <td>Toggle sort order</td>
                     </tr>
                     <tr>
                        <td>Tab</td>
                        <td>Populate shell prompt with selected entry</td>
                     </tr>
                     <tr>
                        <td>Enter</td>
                        <td>Execute selected entry in shell</td>
                     </tr>
                     <tr>
                        <td>?</td>
                        <td>Toggle help modal</td>
                     </tr>
                     <tr>
                        <td>q / Ctrl-C / Ctrl-D</td>
                        <td>Quit</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div class="index-page__subsection" id="search-mode">
            <h3 class="index-page__subsection-heading">Search Mode</h3>
            <p class="index-page__prose">
               Press <code>/</code> or <code>i</code> from normal mode to enter search mode. Type to
               fuzzy-filter entries by name or description.
            </p>
            <div class="index-page__table-wrap">
               <table class="index-page__table">
                  <thead>
                     <tr>
                        <th>Key</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Ctrl-J</td>
                        <td>Move down through results while typing</td>
                     </tr>
                     <tr>
                        <td>Ctrl-K</td>
                        <td>Move up through results while typing</td>
                     </tr>
                     <tr>
                        <td>Esc</td>
                        <td>Exit search mode, return to normal mode</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      <section class="index-page__section" id="reference">
         <h2 class="index-page__section-heading">Reference</h2>

         <div class="index-page__subsection" id="cli-commands">
            <h3 class="index-page__subsection-heading">CLI Commands</h3>
            <div class="index-page__table-wrap">
               <table class="index-page__table">
                  <thead>
                     <tr>
                        <th>Command</th>
                        <th>Description</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>alf</td>
                        <td>Launch the interactive TUI</td>
                     </tr>
                     <tr>
                        <td>alf search [query]</td>
                        <td>Launch TUI with an optional initial search query</td>
                     </tr>
                     <tr>
                        <td>alf init</td>
                        <td>Run the first-time setup wizard</td>
                     </tr>
                     <tr>
                        <td>alf shell-hook &lt;shell&gt;</td>
                        <td>
                           Print shell integration code for <code>zsh</code> or <code>bash</code>
                        </td>
                     </tr>
                     <tr>
                        <td>alf config show</td>
                        <td>Display current configuration</td>
                     </tr>
                     <tr>
                        <td>alf config edit</td>
                        <td>Open config file in <code>$EDITOR</code></td>
                     </tr>
                     <tr>
                        <td>alf config reset</td>
                        <td>Reset configuration to defaults</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>

         <div class="index-page__subsection" id="themes">
            <h3 class="index-page__subsection-heading">Themes</h3>
            <p class="index-page__prose">
               Set <code>theme</code> in the <code>[ui]</code> section of your config. Available
               themes:
            </p>
            <ul class="index-page__list">
               <li><code>default</code> — classic terminal colors</li>
               <li><code>gruvbox</code> — retro groove</li>
               <li><code>nord</code> — arctic blue</li>
               <li><code>dracula</code> — purple/pink dark theme</li>
               <li><code>solarized</code> — precision colors</li>
               <li><code>catppuccin</code> — soothing pastels (Mocha)</li>
               <li><code>tokyonight</code> — Tokyo-inspired dark theme (Storm)</li>
               <li><code>shades_of_purple</code> — purple-heavy theme</li>
            </ul>
            <p class="index-page__prose">
               Press <code>tj</code> / <code>tk</code> inside the TUI to cycle themes live without
               editing the config file.
            </p>
         </div>

         <div class="index-page__subsection" id="platforms">
            <h3 class="index-page__subsection-heading">Supported Platforms</h3>
            <ul class="index-page__list">
               <li>Linux — x86_64, aarch64</li>
               <li>macOS — Intel, Apple Silicon</li>
               <li>Windows — x86_64</li>
            </ul>
            <p class="index-page__prose">
               Licensed under
               <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener">MIT</a>
               or
               <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener"
                  >Apache-2.0</a
               >, at your option.
            </p>
         </div>
      </section>
   </div>
</template>

<script setup lang="ts">
   useHead({
      title: 'ALF Documentation',
      meta: [
         {
            content:
               'Official documentation for alf — Alias & Function CLI Searching Tool. A Rust-built TUI for searching and running shell aliases and functions.',
            name: 'description',
         },
      ],
   });
</script>

<style scoped>
   .index-page {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      padding-bottom: 4rem;
   }

   .index-page__hero {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding-top: 2rem;
   }

   .index-page__title {
      color: var(--color-text-primary);
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.1;
      margin: 0;
   }

   .index-page__subtitle {
      color: var(--color-text-secondary);
      font-size: 1.125rem;
      line-height: 1.7;
      margin: 0;
      max-width: 42rem;
   }

   .index-page__subtitle kbd {
      background-color: var(--color-bg-elevated);
      border: 1px solid var(--color-border);
      border-radius: 0.25rem;
      font-family: inherit;
      font-size: 0.875em;
      padding: 0.1em 0.4em;
   }

   .index-page__cta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 0.25rem;
   }

   .index-page__cta-primary {
      background-color: var(--color-accent);
      border-radius: 0.5rem;
      color: #fff;
      font-size: 0.9375rem;
      font-weight: 600;
      padding: 0.625rem 1.25rem;
      text-decoration: none;
      transition: background-color 0.15s ease;
   }

   .index-page__cta-primary:hover {
      background-color: var(--color-accent-hover);
      color: #fff;
      text-decoration: none;
   }

   .index-page__cta-secondary {
      background-color: var(--color-bg-elevated);
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      color: var(--color-text-secondary);
      font-size: 0.9375rem;
      font-weight: 600;
      padding: 0.625rem 1.25rem;
      text-decoration: none;
      transition:
         background-color 0.15s ease,
         color 0.15s ease;
   }

   .index-page__cta-secondary:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-text-primary);
      text-decoration: none;
   }

   .index-page__section-heading {
      color: var(--color-text-primary);
      font-size: 1.375rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin: 0 0 1.25rem;
   }

   .index-page__card-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
   }

   .index-page__card {
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 0.625rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.25rem;
      text-decoration: none;
      transition:
         border-color 0.15s ease,
         background-color 0.15s ease;
   }

   .index-page__card:hover {
      background-color: var(--color-bg-elevated);
      border-color: var(--color-accent);
      text-decoration: none;
   }

   .index-page__card-title {
      color: var(--color-text-primary);
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
   }

   .index-page__card-desc {
      color: var(--color-text-secondary);
      font-size: 0.875rem;
      line-height: 1.6;
      margin: 0;
   }

   .index-page__section {
      border-top: 1px solid var(--color-border-subtle);
      padding-top: 2rem;
      scroll-margin-top: calc(var(--header-height) + 1rem);
   }

   .index-page__subsection {
      margin-top: 2rem;
      scroll-margin-top: calc(var(--header-height) + 1rem);
   }

   .index-page__subsection-heading {
      color: var(--color-text-primary);
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: -0.01em;
      margin: 0 0 0.75rem;
   }

   .index-page__prose {
      color: var(--color-text-secondary);
      font-size: 0.9375rem;
      line-height: 1.7;
      margin: 0 0 1rem;
   }

   .index-page__code-block {
      background-color: var(--color-bg-elevated);
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.875rem;
      line-height: 1.6;
      margin: 0 0 1.25rem;
      overflow-x: auto;
      padding: 1rem 1.25rem;
      white-space: pre;
   }

   .index-page__code-block code {
      color: var(--color-text-primary);
   }

   .index-page__table-wrap {
      margin: 0 0 1.5rem;
      overflow-x: auto;
   }

   .index-page__table {
      border-collapse: collapse;
      font-size: 0.875rem;
      width: 100%;
   }

   .index-page__table th {
      border-bottom: 1px solid var(--color-border);
      color: var(--color-text-muted);
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      padding: 0.5rem 0.75rem;
      text-align: left;
      text-transform: uppercase;
   }

   .index-page__table td {
      border-bottom: 1px solid var(--color-border-subtle);
      color: var(--color-text-secondary);
      padding: 0.5rem 0.75rem;
      vertical-align: top;
   }

   .index-page__table td:first-child {
      color: var(--color-text-primary);
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      white-space: nowrap;
   }

   .index-page__table tr:last-child td {
      border-bottom: none;
   }

   .index-page__note {
      background-color: var(--color-bg-secondary);
      border-left: 3px solid var(--color-accent);
      border-radius: 0 0.375rem 0.375rem 0;
      color: var(--color-text-secondary);
      font-size: 0.875rem;
      line-height: 1.6;
      margin: 0 0 1.25rem;
      padding: 0.625rem 1rem;
   }

   .index-page__list {
      color: var(--color-text-secondary);
      font-size: 0.9375rem;
      line-height: 1.7;
      margin: 0 0 1.25rem;
      padding-left: 1.5rem;
   }

   .index-page__list li {
      margin-bottom: 0.25rem;
   }

   .index-page__section code {
      background-color: var(--color-bg-elevated);
      border-radius: 0.25rem;
      font-size: 0.875em;
      padding: 0.125em 0.375em;
   }
</style>
