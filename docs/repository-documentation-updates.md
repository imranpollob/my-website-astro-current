# Research repository documentation updates

Prepared October 29, 2026 from public repository documentation and supplied papers. These are review drafts, not changes to external repositories. No research experiments were rerun.

## AuthGuard-7702: proposed root README

The public repository has several experimental revisions. Its `revision_v3/README.md` calls v3 a reviewer-readiness workspace and v2 a frozen reference. It does not, by itself, establish which commit reproduces the accepted manuscript. A root guide can be published now without making that claim:

```md
# AuthGuard-7702

Research artifact for **Pre-Authorization Screening of EIP-7702 Account Delegation in Ethereum Blockchain under an Execution-Audited Adaptive Adversary**, by M M Imran, Anik Tahabilder, Changxin Bai, Qiang Zhu, and Shiyong Lu.

Accepted at the 8th IEEE International Conference on Trust, Privacy and Security in Intelligent Systems, and Applications (TPS), 2026.

[Paper and evaluation scope](https://www.imranpollob.com/research/authguard-7702/)

AuthGuard studies runtime-bytecode screening before account delegation and evaluates evasion by a score-aware, query-bounded adversary. Its results concern the evaluated dataset and threat model; the classifier is not a certificate that a delegate is safe.

## Repository guide

- `revision_v2/`: frozen reference implementation and canonical inputs.
- [`revision_v3/README.md`](revision_v3/README.md): independent reviewer-readiness workspace, environment assumptions, input provenance, tests, and experiment commands.
- Read the revision documentation before selecting a reproduction workflow. Later workspace experiments should not be assumed to reproduce the accepted paper's tables.

## Environment and reproduction

The v3 documentation uses Python 3 with PyTorch/CUDA for training, pytest for tests, and canonical input artifacts from v2. The documented v2 virtual environment is not the v3 training environment. Consult the revision-specific README and manifests for exact data requirements and commands.

A tagged release with a pinned environment and an explicit paper-table-to-command map is needed to make the accepted-paper workflow unambiguous.
```

### Remaining release work

Identify the accepted manuscript's exact commit and experiment outputs; freeze dependency versions and data checksums; document hardware/runtime; map each reported table to a command and expected output; then tag a release. Do not relabel the latest revision as the paper artifact without that comparison. This task is not safely inferable from the website or manuscript alone.

## PrivGas: concrete README correction

In `stealth-protocol/README.md`, replace:

```sh
git clone <repo> && cd stealth-protocol
forge test              # 65 passing
```

with:

```sh
git clone https://github.com/imranpollob/stealth-protocol.git
cd stealth-protocol
forge test
```

Keep the existing `forge test --gas-report` command and links to `GAS_REPORT.md` and `PAPER_SUPPLEMENT.md`. The test count is a reported artifact result, not a guarantee for every revision/environment. Add the website [paper page](https://www.imranpollob.com/research/privgas/) after it is deployed.

A stable paper-associated release still needs an actual tag/commit selected after comparing the manuscript and the artifact's claim-to-test mapping. Do not invent a version number or imply end-to-end reproduction from the website build.

## ZKScan

The manuscript points to `https://github.com/atahabilder1/ZKScan`; the GitHub connector returned 404 during this implementation. This could indicate a private, renamed, or unavailable repository. No Code button has been added. Obtain a confirmed public artifact destination from the authors before linking or pinning it.

## Provenance

- AuthGuard v3 README: https://github.com/imranpollob/AuthGuard-7702/blob/main/revision_v3/README.md
- PrivGas README: https://github.com/imranpollob/stealth-protocol/blob/main/README.md
- ZKScan destination: URL printed in the supplied manuscript; 404 observed October 29, 2026.
