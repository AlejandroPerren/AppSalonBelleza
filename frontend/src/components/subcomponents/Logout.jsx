const logout = async () => {
    await fetch('http://localhost:4000/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
    });
    setUser(null);
    setIsAuthenticated(false);
    navigate('/login');
};

return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
        {children}
    </AuthContext.Provider>
);
