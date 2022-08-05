import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo>
            <img src={logoImgSrc}></img>
          </Logo>
        </Link>
        <Link to="reservation">예약목록</Link>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 0;
  background: linear-gradient(70deg, purple, tomato, yellow);
  border-bottom: 1px solid ${theme.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.h1`
  color: white;
`;
const Wrapper = styled.div`
  max-width: 976px;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${theme.primaryColor};
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const logoImgSrc =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1IiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMTI1IDMxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU4LjMyNTEgNC45Mjg3NkM1OC4zMjUxIDUuOTkzOTggNTcuNDU3NyA2Ljg1NzUxIDU2LjM4NzcgNi44NTc1MUM1NS4zMTc3IDYuODU3NTEgNTQuNDUwMyA1Ljk5Mzk4IDU0LjQ1MDMgNC45Mjg3NkM1NC40NTAzIDMuODYzNTMgNTUuMzE3NyAzIDU2LjM4NzcgM0M1Ny40NTc3IDMgNTguMzI1MSAzLjg2MzUzIDU4LjMyNTEgNC45Mjg3NlpNODAuMDc3NyAyMC4wMTAxVjIwLjczOTlINzYuNzcxN1YxNC4yMjcyVjMuNjc4MzNIODAuMDc3N1Y4LjQ0NDIxQzgxLjA4NyA3Ljg0NjU1IDgyLjI2NiA3LjUwMzMgODMuNTI1NSA3LjUwMzNDODcuMjU1NSA3LjUwMzMgOTAuMjc5MyAxMC41MTM3IDkwLjI3OTMgMTQuMjI3MkM5MC4yNzkzIDE3Ljk0MDcgODcuMjU1NSAyMC45NTEgODMuNTI1NSAyMC45NTFDODIuMjY2IDIwLjk1MSA4MS4wODcgMjAuNjA3OCA4MC4wNzc3IDIwLjAxMDFaTTg2Ljg5OTEgMTQuMjI3Qzg2Ljg5OTEgMTYuMTc0NiA4NS4zMTMyIDE3Ljc1MzUgODMuMzU2OSAxNy43NTM1QzgxLjQwMDYgMTcuNzUzNSA3OS44MTQ3IDE2LjE3NDYgNzkuODE0NyAxNC4yMjdDNzkuODE0NyAxMi4yNzkzIDgxLjQwMDYgMTAuNzAwNSA4My4zNTY5IDEwLjcwMDVDODUuMzEzMiAxMC43MDA1IDg2Ljg5OTEgMTIuMjc5MyA4Ni44OTkxIDE0LjIyN1pNNDMuODMzIDMuNjgwNDNWNi40MzcwNEgzOS4xMzdWMjAuNzM5N0gzNS42OTZWNi40MzcwNEgzMVYzLjY4MDQzSDQzLjgzM1pNNDcuNTI2OCA5LjczNjI2QzQ3Ljk1MTkgOS4wNDY2MyA0OC41MDI5IDguNTA1OSA0OS4xNzk4IDguMTE0MDdDNDkuODcyNSA3LjcyMjIzIDUxLjA2NDIgNy41MjYzMSA1MS45NDU5IDcuNTI2MzFWMTAuOTgyM0g1MC42Njc2QzQ5LjYyODUgMTAuOTgyMyA0OC44NDEzIDExLjIyNTIgNDguMzA2MSAxMS43MTExQzQ3Ljc4NjYgMTIuMTk3IDQ3LjUyNjggMTMuMDQzMyA0Ny41MjY4IDE0LjI1MDJWMjAuNzM5SDQ0LjIyMDdWNy43MTQzOUg0Ny41MjY4VjkuNzM2MjZaTTU4LjE5MiAyMC43MzkxVjcuNzE0NTdINTQuNTYyMlYyMC43MzkxSDU4LjE5MlpNOTYuNDIzNiAxMC40MTkzVjE2LjcyQzk2LjQyMzYgMTcuMTU4OCA5Ni41MjU5IDE3LjQ4MDEgOTYuNzMwNiAxNy42ODM5Qzk2Ljk1MSAxNy44NzIgOTcuMzEzIDE3Ljk2NiA5Ny44MTY4IDE3Ljk2Nkg5OS4zNTE4VjIwLjc0MDJIOTcuMjczN0M5NC40ODcxIDIwLjc0MDIgOTMuMDkzOSAxOS4zOTIzIDkzLjA5MzkgMTYuNjk2NVYxMC40MTkzSDkxLjUzNTNWNy43MTU2Mkg5My4wOTM5VjQuODMwNjFIOTYuNDIzNlY3LjcxNTYySDk5LjM1MThWMTAuNDE5M0g5Ni40MjM2Wk0xMjQuODQgMTguMDM0NkgxMTguOTUyTDEyNC43NjggMTAuMzcwM1Y3LjcxMzY4SDExNS4xODVWMTAuNDE3M0gxMjAuOTNMMTE1LjE2MSAxOC4wODE2VjIwLjczODJIMTI0Ljg0VjE4LjAzNDZaTTEwNy40NDkgMjAuOTUwMUMxMTEuMTggMjAuOTUwMSAxMTQuMjAzIDE3LjkzOTggMTE0LjIwMyAxNC4yMjYzQzExNC4yMDMgMTAuNTEyOCAxMTEuMTggNy41MDI0MSAxMDcuNDQ5IDcuNTAyNDFDMTAzLjcxOSA3LjUwMjQxIDEwMC42OTYgMTAuNTEyOCAxMDAuNjk2IDE0LjIyNjNDMTAwLjY5NiAxNy45Mzk4IDEwMy43MTkgMjAuOTUwMSAxMDcuNDQ5IDIwLjk1MDFaTTEwNy40NDkgMTcuNzUzN0MxMDkuNDA2IDE3Ljc1MzcgMTEwLjk5MSAxNi4xNzQ5IDExMC45OTEgMTQuMjI3MkMxMTAuOTkxIDEyLjI3OTYgMTA5LjQwNiAxMC43MDA3IDEwNy40NDkgMTAuNzAwN0MxMDUuNDkzIDEwLjcwMDcgMTAzLjkwNyAxMi4yNzk2IDEwMy45MDcgMTQuMjI3MkMxMDMuOTA3IDE2LjE3NDkgMTA1LjQ5MyAxNy43NTM3IDEwNy40NDkgMTcuNzUzN1pNNjguMTk3NSAyMC45NTAxQzcxLjkyNzYgMjAuOTUwMSA3NC45NTEzIDE3LjkzOTggNzQuOTUxMyAxNC4yMjYzQzc0Ljk1MTMgMTAuNTEyOCA3MS45Mjc2IDcuNTAyNDEgNjguMTk3NSA3LjUwMjQxQzY2LjkzOCA3LjUwMjQxIDY1Ljc1OSA3Ljg0NTY2IDY0Ljc0OTggOC40NDMzMlY3LjcxMzk4SDYxLjQ0MzdWMTQuMjI2M1YyNC42Mjc0SDY0Ljc0OThWMjAuMDA5MkM2NS43NTkgMjAuNjA2OSA2Ni45MzggMjAuOTUwMSA2OC4xOTc1IDIwLjk1MDFaTTcxLjU3MDggMTQuMjI3MkM3MS41NzA4IDE2LjE3NDkgNjkuOTg0OSAxNy43NTM3IDY4LjAyODYgMTcuNzUzN0M2Ni4wNzIyIDE3Ljc1MzcgNjQuNDg2MyAxNi4xNzQ5IDY0LjQ4NjMgMTQuMjI3MkM2NC40ODYzIDEyLjI3OTYgNjYuMDcyMiAxMC43MDA3IDY4LjAyODYgMTAuNzAwN0M2OS45ODQ5IDEwLjcwMDcgNzEuNTcwOCAxMi4yNzk2IDcxLjU3MDggMTQuMjI3MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy40MDI5IDIxLjA5OFYxMC45NDU0TDEzLjgyNCAzLjk4MTUyTDIwLjQxNzQgOC40Njk4M1YxNi43OTQ1TDIzLjgyMDMgMTlWNi42ODkzNEwxMy44MjQ5IDBMMCA5LjE2Mzk4VjI0LjUwMDlIMTIuODE3NlYyMS4wOThIMy40MDI5WiIgZmlsbD0idXJsKCNwYWludDBfZGlhbW9uZF81NjQ2XzMwNjgzKSIvPgo8cGF0aCBkPSJNMjYuODUyOSAyMC43MkwxMi41MDMzIDExLjA1NTJDMTIuMjg3IDEwLjkwOTUgMTIgMTEuMDY5MiAxMiAxMS4zMzUyVjMwLjY2NDhDMTIgMzAuOTMwOCAxMi4yODcgMzEuMDkwNSAxMi41MDMzIDMwLjk0NDhMMjYuODUyOSAyMS4yOEMyNy4wNDkgMjEuMTQ3OSAyNy4wNDkgMjAuODUyMSAyNi44NTI5IDIwLjcyWiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX2RpYW1vbmRfNTY0Nl8zMDY4MyIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4xMTk0IDI0LjM3NzQpIHJvdGF0ZSgtMTgwKSBzY2FsZSgyMS40MjI4IDE1Ljk3NzcpIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==';
